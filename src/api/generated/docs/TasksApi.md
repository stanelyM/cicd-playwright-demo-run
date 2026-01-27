# TasksApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**tasksCompletedGet**](TasksApi.md#taskscompletedget) | **GET** /tasks/completed | Returns all completed tasks |
| [**tasksGet**](TasksApi.md#tasksget) | **GET** /tasks | Returns all tasks. Slow service, around 3 seconds |
| [**tasksIdCompletePost**](TasksApi.md#tasksidcompletepost) | **POST** /tasks/{id}/complete | Completes given task, then returns modified task |
| [**tasksIdDelete**](TasksApi.md#tasksiddelete) | **DELETE** /tasks/{id} | Deletes given task |
| [**tasksIdIncompletePost**](TasksApi.md#tasksidincompletepost) | **POST** /tasks/{id}/incomplete | Incompletes given task, then returns modified task |
| [**tasksIdPost**](TasksApi.md#tasksidpost) | **POST** /tasks/{id} | Updates text of given task, then returns modified task |
| [**tasksPost**](TasksApi.md#taskspost) | **POST** /tasks | Creates task with given text, then returns created task |



## tasksCompletedGet

> Array&lt;Task&gt; tasksCompletedGet()

Returns all completed tasks

### Example

```ts
import {
  Configuration,
  TasksApi,
} from '';
import type { TasksCompletedGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TasksApi();

  try {
    const data = await api.tasksCompletedGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Task&gt;**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## tasksGet

> Array&lt;Task&gt; tasksGet()

Returns all tasks. Slow service, around 3 seconds

### Example

```ts
import {
  Configuration,
  TasksApi,
} from '';
import type { TasksGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TasksApi();

  try {
    const data = await api.tasksGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Task&gt;**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## tasksIdCompletePost

> Task tasksIdCompletePost(id)

Completes given task, then returns modified task

### Example

```ts
import {
  Configuration,
  TasksApi,
} from '';
import type { TasksIdCompletePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TasksApi();

  const body = {
    // string | ID of task
    id: id_example,
  } satisfies TasksIdCompletePostRequest;

  try {
    const data = await api.tasksIdCompletePost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | ID of task | [Defaults to `undefined`] |

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | ID of task was not found |  -  |
| **422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## tasksIdDelete

> string tasksIdDelete(id)

Deletes given task

### Example

```ts
import {
  Configuration,
  TasksApi,
} from '';
import type { TasksIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TasksApi();

  const body = {
    // string | ID of task
    id: id_example,
  } satisfies TasksIdDeleteRequest;

  try {
    const data = await api.tasksIdDelete(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | ID of task | [Defaults to `undefined`] |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | ID of task was not found |  -  |
| **422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## tasksIdIncompletePost

> Task tasksIdIncompletePost(id)

Incompletes given task, then returns modified task

### Example

```ts
import {
  Configuration,
  TasksApi,
} from '';
import type { TasksIdIncompletePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TasksApi();

  const body = {
    // string | ID of task
    id: id_example,
  } satisfies TasksIdIncompletePostRequest;

  try {
    const data = await api.tasksIdIncompletePost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | ID of task | [Defaults to `undefined`] |

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | ID of task was not found |  -  |
| **422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## tasksIdPost

> Task tasksIdPost(id, updateTask)

Updates text of given task, then returns modified task

### Example

```ts
import {
  Configuration,
  TasksApi,
} from '';
import type { TasksIdPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TasksApi();

  const body = {
    // string | ID of task
    id: id_example,
    // UpdateTask | text
    updateTask: ...,
  } satisfies TasksIdPostRequest;

  try {
    const data = await api.tasksIdPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | ID of task | [Defaults to `undefined`] |
| **updateTask** | [UpdateTask](UpdateTask.md) | text | |

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## tasksPost

> Task tasksPost(createTask)

Creates task with given text, then returns created task

### Example

```ts
import {
  Configuration,
  TasksApi,
} from '';
import type { TasksPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TasksApi();

  const body = {
    // CreateTask | text
    createTask: ...,
  } satisfies TasksPostRequest;

  try {
    const data = await api.tasksPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createTask** | [CreateTask](CreateTask.md) | text | |

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **422** | Bad request response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

