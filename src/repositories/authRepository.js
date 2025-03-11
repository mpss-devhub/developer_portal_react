import { API_URLS, baseURL } from "../enums/urls";
import { client } from "./client";

const register = async (payload) => {
  const response = await client.exec(`${API_URLS.AUTH}` + "/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  console.log(response);
  return response;
};

const login = async (payload) => {
  const response = await client.exec(`${API_URLS.AUTH}` + "/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return response;
};

const userDetail = async () => {
  const response = await client.exec(`${API_URLS.USER}`);
  return response;
};

const emailVerify = async (query) => {
  const response = await client.exec(
    `${API_URLS.AUTH}` + "/email" + "/verify" + `?${query}`, // Query params added here
    {
      method: "POST",
    }
  );
  return response;
};

export const authRepository = { register, login, userDetail, emailVerify };
