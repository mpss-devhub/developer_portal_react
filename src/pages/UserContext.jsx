import { useState, createContext } from "react"; // Import createContext
import axios from "axios";

// Create and export UserContext
export const UserContext = createContext();

// Export UserProvider
export const UserProvider = ({ children }) => {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const getUsers = async () => {
        const apiUsers = await axios.get("http://127.0.0.1:8000/api/v1/users");
        setUsers(apiUsers.data.data);
    };

    const getUser = async (id) => {
        const response = await axios.get("users/" + id);
        setUser(response.data.data); // Correctly set the user state
    };

    return (
        <UserContext.Provider value={{ user, users, getUser, getUsers, onChange, formValues }}>
            {children}
        </UserContext.Provider>
    );
};