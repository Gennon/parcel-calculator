import api from "./setup";

export const getConfiguration = async () => {
  try
  {
    return await api.get('/configuration');
  }
  catch (error)
  {
    console.warn(error);
    return null;
  }
}