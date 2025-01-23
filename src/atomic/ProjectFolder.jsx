import { FolderKanban } from "lucide-react";
import React from "react";

const ProjectFolder = () => {
  return (
    <div className="text-center border-2 border-gray-400 py-5
     rounded-lg grid grid-flow-row gap-2 items-center bg-white shadow-md hover:shadow-lg transition">
      <FolderKanban className=" mx-auto" size={32} />
      <h3 className="text-sm font-medium">Testing</h3>
      <p className=" text-sm">Direct API Integration</p>
    </div>
  );
};

export default ProjectFolder;
