import { ENV } from "../utils/constants";

async function registerUser(email, username, password) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.REGISTER}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
    };
    const response = await fetch(url, params);

    if (response.status !== 200) throw response;
    return response.json();
  } catch (error) {
    throw error;
  }
}

async function login(identifier, password) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.LOGIN}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier, password }),
    };
    const response = await fetch(url, params);

    if (response.status !== 200) throw response;
    return response.json();
  } catch (error) {
    throw error;
  }
}

export const authApi = {
  registerUser,
  login,
};
