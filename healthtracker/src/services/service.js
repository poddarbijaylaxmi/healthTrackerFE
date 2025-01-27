const BASE_URL = process.env.REACT_APP_API_URL; // Assuming the base URL is in .env

// Common function to handle all API requests (GET, POST, PUT, DELETE)
const apiCall = async (endpoint, method, body = null) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const options = {
    method: method,
    headers: headers,
    body: body ? JSON.stringify(body) : null,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    // Check if the response is ok (status 200-299)
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    // If the response is not empty, parse it to JSON
    if (response.status !== 204) {
      return await response.json();
    }

    return null; // For status 204 (No Content)
  } catch (error) {
    console.error("API Error:", error);
    throw error; // Rethrow to handle it in the caller
  }
};

// Specific API functions

// POST: Sign-up User
export const signUpUser = async (userData) => {
  return await apiCall("/api/auth/signup", "POST", userData);
};

// POST: Login User
export const loginUser = async (userData) => {
  return await apiCall("/api/auth/login", "POST", userData);
};

// GET: Fetch Todos
export const getTodos = async () => {
  return await apiCall("/api/todos", "GET");
};

// POST: Create Todo
export const createTodo = async (todoData) => {
  return await apiCall("/api/todos", "POST", todoData);
};

// PUT: Update Todo
export const updateTodo = async (id, todoData) => {
  return await apiCall(`/api/todos/${id}`, "PUT", todoData);
};

// DELETE: Delete Todo
export const deleteTodo = async (id) => {
  return await apiCall(`/api/todos/${id}`, "DELETE");
};
