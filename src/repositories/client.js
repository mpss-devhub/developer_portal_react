const exec = async (endPoint, config) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const headers = {
    "content-type": "application/json",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

  const response = await fetch(`${baseURL}${endPoint}`, {
    ...config,
    headers: {
      ...headers,
      ...config?.headers,
    },
  });

  return await response.json();
};

const execFormData = async (endPoint, method, formData) => {
  const token = getToken();
  const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

  const response = await fetch(`${baseURL}${endPoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  return await response.json();
};

export const client = {
  exec,
  execFormData,
};
