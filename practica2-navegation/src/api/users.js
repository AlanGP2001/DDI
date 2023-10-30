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
  // console.log(token);
try {
  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_UPDATE}/${id}`;
  
  // Configurar la solicitud PUT con los datos a actualizar
  const response = await authFetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // Asegúrate de que 'data' sea un objeto JSON
  });
  
  return await response.json();
} catch (error) {
  console.log(error);
  return null;
}
};

export const userController = {
    getMe,
    putMe,
};
