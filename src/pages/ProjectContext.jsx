import { useState, createContext, Children } from "react";
export const ProjectContext = createContext();
export const ProjectProvider = ({children}) => {
    const [formValues,setFormValues] = useState({
        pj_name: "",
        type: "",
    });
    const [project,setProject] = useState({});
    const [projects,setProjects] = useState({});
    const onChange = (e) => {
        const{name, value} = e.target;
        setFormValues({...formValues,[name]:value});
    };
    return (
        <ProjectContext.Provider value={{project,projects,onChange,formValues}}>
            {children}
        </ProjectContext.Provider>
    )
}