import React from "react";
import Layout from "./layout/layouts";
import { Search } from "lucide-react";
import ProjectFolder from "../atomic/ProjectFolder";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import ProjectCreateAlert from "../atomic/alert/ProjectCreateAlert";

const Dashboard = () => {

  return (
    <Layout>
      <div className="px-6 mt-6 space-y-6">
        {/* Notification Banner */}
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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Search size={16} />
            Search
          </Button>
          <ProjectCreateAlert />
        </div>

        {/* Projects Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b-2 pb-2">
            Created Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Render multiple ProjectFolder components */}
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <ProjectFolder key={index} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
