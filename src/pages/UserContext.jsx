import {createUser, useState} from "react";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8001/api/v1/users";
const UserContext  = createUser();
export const UserPorvider = ({children}) =>{
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone:"",
        password:""
      });
      const [user,setUser] = useState({});
      const [users,setUsers] = useState({});
      const onChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
      }
        const getUsers = async () => {
          const apiUsers = await axios.get("users");
          setUsers(apiUsers.data.data);
        }
        const getUser = async (id) => {
          const apiUsers = await axios.get("users/"+id);
          setUsers(response.data.data);
        }

        return <UserContext.Provider value= {{user,users,getuser,getUsers, onChange, formValues}}>{children}</UserContext.Provider>
};
export default UserContext;