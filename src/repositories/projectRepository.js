import { API_URLS } from "../enums/urls";
import { client } from "./client";

const createProject = async (payload) => {
  const response = await client.exec(`${API_URLS.PROJECT}`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return response;
};
const fetchProject = async () => {
  const response = await client.exec(`${API_URLS.PROJECT}`, {
    method: "GET",
  });
  return response;
};

export const projectRepository = { createProject, fetchProject };
