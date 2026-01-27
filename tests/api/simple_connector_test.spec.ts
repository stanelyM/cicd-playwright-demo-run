import { test, expect } from "@playwright/test";

import { TasksApi, Configuration } from "@api/generated";

const config = new Configuration({
    basePath: "http://localhost:8080",
  });

test ('Simple connector test', async ({ request }) => {

    // This is how we can use generated connector by OpenAPI
    const api = new TasksApi(config);
    const response = await api.tasksGet()

    console.log(response);
    


})