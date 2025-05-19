import React, { useEffect, useState } from "react";
import Layout from "./layout/Layouts";
import ProjectFolder from "../atomic/ProjectFolder";
import ProjectCreateAlert from "../atomic/alert/ProjectCreateAlert";
import StartAlert from "./StartAlert";
import { projectRepository } from "../repositories/projectRepository";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const fetchUserProjects = async () => {
    try {
      const response = await projectRepository.fetchProject();
      setProjects(response.projects);
    } catch (e) {
      console.error("Error fetching user projects: ", e);
      alert("Error retrieving projects.");
    }
  };

  useEffect(() => {
    fetchUserProjects();
  }, []);

  const handleProjectCreated = () => {
    fetchUserProjects();
  };

  return (
    <Layout>
      <StartAlert open={showAlert} onOpenChange={setShowAlert} />
      <div className="px-6 mt-6 space-y-6">
        <div className="">
          <ProjectCreateAlert onProjectCreated={handleProjectCreated} />
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b-2 pb-2">
            Created Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.isArray(projects) && projects.length > 0 ? (
              projects.map((project) => (
                <ProjectFolder key={project.id} project={project} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No projects created yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
