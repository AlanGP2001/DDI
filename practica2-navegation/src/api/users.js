import { ENV } from "../utils/constants";
import { authFetch } from "../utils/authFetch";

const getMe = async (token) => {
    // console.log(token);
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;
    const response  = await authFetch(url);
    
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

const putMe = async (id, data) => {
try {
  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_UPDATE}/${id}`;
  
  const response = await authFetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  // if (response.statusCode) throw "Error al actualizar el usuario";
  return await response.json();
} catch (error) {
  // throw error;
  console.log(error);
  return null;
}
};

export const userController = {
    getMe,
    putMe,
};
