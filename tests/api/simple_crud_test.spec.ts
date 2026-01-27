import { test, expect } from "@playwright/test";

test ('API CRUD test', async ({ request }) => {

    // Calling GET request
    await request.get('http://localhost:8080/tasks').then (response => {
        expect(response.ok()).toBeTruthy();
    })

    // Calling POST request - NEW
    const ResponseforPost = await request.post('http://localhost:8080/tasks', {
        data: {
            "text": "New task from CRUD automation test",
        }
    });

    const body = await ResponseforPost.json();
    const id = body.id;

    
    // Calling POST request - UPDATE
    await request.post(`http://localhost:8080/tasks/${id}`, {
        data: {
            "text": "Updated task from test",
        }
    });

    // Calling DELETE request
    await request.delete(`http://localhost:8080/tasks/${id}`);
    


})