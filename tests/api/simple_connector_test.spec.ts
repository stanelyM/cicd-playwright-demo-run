import { test, expect } from "@playwright/test";

import { TasksApi, Configuration } from "@api/generated";

const config = new Configuration({
  basePath: "http://localhost:8080",
});

// Simple test with generated OpenAPI connector
test('Simple connector test', async ({ request }) => {

  // This is how we can use generated connector by OpenAPI
  const api = new TasksApi(config);
  const response = await api.tasksGet();

  console.log(response);
 
  
  // Example how to call DELETE
  const task = await api.tasksPost({
    createTask: {
      text: 'Text added from OpenAPI generated connector',
    },
  });

  // Example how to call DELETE
  await api.tasksIdDelete({
    id: task.id
  });
  



})