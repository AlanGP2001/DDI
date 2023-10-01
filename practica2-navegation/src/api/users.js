import { ENV } from "../utils/constants";

const getMe = async (token) => {
    console.log(token);
  try {
    const response = await fetch(`${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`, {
      method: "GET",
      headers: {
        Authorizations: `Bearer '${token}'`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const userController = {
    getMe,
};
