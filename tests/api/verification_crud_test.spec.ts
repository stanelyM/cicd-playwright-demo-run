import { test, expect } from "@playwright/test";

// Created small helper for better printed error messages with more details
const assertOk = (res: any, label: string) => {
  expect(
    res.ok(),
    `${label} failed: ${res.status()} ${res.statusText()}`
  ).toBeTruthy();
};

const BASE_URL = "http://localhost:8080";


// Added some verification to api test with more functionality
test("API Verification CRUD test", async ({ request }) => {

  // Helper to get all tasks
  const getTasksWrapper = async () => {
    const res = await request.get(`${BASE_URL}/tasks`);
    assertOk(res, "GET /tasks");
    const body = await res.json();
    expect(body, "GET /tasks should return an array").toBeInstanceOf(Array);
    return body;
  };


  // 1) GET tasks (baseline)
  const tasksBefore = await getTasksWrapper();


  // 2) CREATE task
  const createText = "New task from CRUD automation test";
  const createRes = await request.post(`${BASE_URL}/tasks`, {
    data: { text: createText },
  });
  assertOk(createRes, "POST /tasks");

  const created = await createRes.json();
  expect(created, "POST /tasks should return created task").toEqual(expect.any(Object)); // Needs to be {}
  expect(created.id, "Created task should have string id").toEqual(expect.any(String));
  expect(created.text, "Created task text should match").toBe(createText);

  const id: string = created.id;

  // 3) UPDATE task (backend uses POST /tasks/:id)
  const updateText = "Updated task from CRUD automation test";
  const updateRes = await request.post(`${BASE_URL}/tasks/${id}`, {
    data: { text: updateText },
  });
  assertOk(updateRes, `POST /tasks/${id} (update)`);

  const updated = await updateRes.json();
  expect(updated.text, "Update response text should match").toBe(updateText);
  
  // Verify update persisted (source of truth)
  const tasksAfterUpdate = await getTasksWrapper();
  const found = tasksAfterUpdate.find((t:any) => typeof t === "object" && t !== null && "id" in t && t.id === id);

  expect(found, "Updated task should exist in GET /tasks").toBeTruthy();
  expect(found!.text, "Updated task should have updated text").toBe(updateText);


  // 4) DELETE task
  const deleteRes = await request.delete(`${BASE_URL}/tasks/${id}`);
  assertOk(deleteRes, `DELETE /tasks/${id}`);

  // Verify delete
  const tasksAfterDelete = await getTasksWrapper();
  expect(
    tasksAfterDelete.some((t:any) => typeof t === "object" && t !== null && "id" in t && t.id === id),
    "Deleted task should not appear in GET /tasks"
  ).toBeFalsy();

});
