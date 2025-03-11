import { useState, createContext } from "react";
import axios from "axios";
import { API_URLS, baseURL } from "../enums/urls";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const getUsers = async () => {
    const apiUsers = await axios.get(`${baseURL}${API_URLS.USER}`);
    setUsers(apiUsers.data.data);
  };

  const getUser = async (id) => {
    const response = await axios.get(`${baseURL}${API_URLS.USER}` + id);
    setUser(response.data.data);
  };

  return (
    <UserContext.Provider
      value={{ user, users, getUser, getUsers, onChange, formValues }}
    >
      {children}
    </UserContext.Provider>
  );
};
