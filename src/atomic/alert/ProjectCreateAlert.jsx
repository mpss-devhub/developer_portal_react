import React, { useContext } from "react";
import { ProjectContext } from "../../pages/ProjectContext";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProjectCreateAlert = () => {
  const { user } = useSelector((state) => state.auth); 
  console.log("User:", user); 
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      projectName: "",
      integrationType: "Direct API Integration",
    },
    mode: "onSubmit",
  });

  const { projects, setProjects } = useContext(ProjectContext) || {};

  const onSubmit = async (data) => {
    if (!user?.id) {
      console.error("User not authenticated");
      return;
    }

    const formattedData = {
      pj_name: data.projectName,
      type: data.integrationType,
      user_id: user.id,
    };

    console.log("Submitting Data:", formattedData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/projects",
        formattedData
      );
      console.log("Project created:", response.data);
      setProjects([...projects, response.data]);
      navigate("/");
    } catch (e) {
      console.error("Project creation failed", e.response?.data || e.message);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="outline" className="flex items-center gap-2">
          <Plus size={16} />
          Create a project
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create a project</AlertDialogTitle>
        </AlertDialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="projectName"
              rules={{ required: "Project name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Project Name</FormLabel>
                  <FormControl>
                    <Input
                      id="projectName"
                      type="text"
                      placeholder="Enter project name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="integrationType"
              rules={{ required: "Integration type is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">
                    Select an Integration Type
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="direct" value="Direct API Integration" />
                        <FormLabel htmlFor="direct">Direct API Integration</FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="redirect" value="Redirect API Integration" />
                        <FormLabel htmlFor="redirect">Redirect API Integration</FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="wordpress" value="WordPress API Integration" />
                        <FormLabel htmlFor="wordpress">WordPress API Integration</FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction type="submit">
                Create a Project
              </AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProjectCreateAlert;
