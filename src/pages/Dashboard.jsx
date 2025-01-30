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

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [projects, setProjects] = useState([]);

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
  }, [user]);

  return (
    <Layout>
      <div className="px-6 mt-6 space-y-6">
        <Card>
          <CardHeader>
            <CardDescription>
              <p className="text-sm text-center">
                Your free trial account will end in <strong>14 days</strong>.{" "}
                <a
                  className="underline text-blue-700 hover:text-blue-900 transition-colors"
                  href="#"
                >
                  Upgrade now.
                </a>
              </p>
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Search size={16} />
            Search
          </Button>
          <ProjectCreateAlert />
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
