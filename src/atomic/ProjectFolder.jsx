import { FolderKanban } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ProjectFolder = ({ project }) => {
  let link = "";
  if (project.pj_type === "Direct API Integration") {
    link = "direct";
  } else if (project.pj_type === "Redirect API Integration") {
    link = "redirect";
  } else if (project.pj_type === "WordPress API Integration") {
    link = "wordpress";
  } else {
    link = "default";
  }
  return (
    <Link
      to={link}
      className="text-center border-2 border-gray-400 py-5 
     rounded-lg grid grid-flow-row gap-2 items-center bg-white shadow-md hover:shadow-lg transition"
    >
      <FolderKanban className=" mx-auto" size={32} />
      <h3 className="text-sm font-medium">{project.pj_name}</h3>
      <p className=" text-sm">{project.pj_type}</p>
    </Link>
  );
};

export default ProjectFolder;
