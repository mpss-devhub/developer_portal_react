import React, { useEffect, useState } from "react";
import Layout from "./layout/Layouts";
import { Search } from "lucide-react";
import ProjectFolder from "../atomic/ProjectFolder";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardDescription } from "@/components/ui/card";
import ProjectCreateAlert from "../atomic/alert/ProjectCreateAlert";
import { useSelector } from "react-redux";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../config/firebaseConfig";
import StartAlert from "./StartAlert";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [projects, setProjects] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const fetchUserProjects = async (userUid) => {
    try {
      const q = query(
        collection(db, "projects"),
        where("createdBy", "==", userUid)
      );
      const querySnapshot = await getDocs(q);
      const projects = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projects);
    } catch (e) {
      console.error("Error fetching user projects: ", e);
      alert("Error retrieving projects.");
    }
  };

  useEffect(() => {
    if (user && user.uid) {
      fetchUserProjects(user.uid);
    }
    if (localStorage.getItem("loginSuccess") === "true") {
      setShowAlert(true);
      // Remove the flag so the alert is shown only once.
      localStorage.removeItem("loginSuccess");
    }
  }, [user]);

  return (
    <Layout>
        <StartAlert open={showAlert} onOpenChange={setShowAlert} />
      <div className="px-6 mt-6 space-y-6">
        <div className="">
          <ProjectCreateAlert/>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b-2 pb-2">
            Created Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.length > 0 ? (
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
