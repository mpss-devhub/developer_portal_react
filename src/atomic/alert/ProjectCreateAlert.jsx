import React from "react";
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
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { useSelector } from "react-redux";

const ProjectCreateAlert = () => {
  const { user } = useSelector((state) => state.auth);

  const form = useForm({
    defaultValues: {
      projectName: "",
      integrationType: "direct",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "projects"), {
        projectName: data.projectName,
        integrationType: data.integrationType,
        createdAt: new Date().toISOString(),
        createdBy: user.uid,
      });
      form.reset();
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error creating project.");
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
                        <RadioGroupItem
                          id="direct"
                          value="Direct API Integration"
                        />
                        <FormLabel htmlFor="direct">
                          Direct API Integration
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          id="redirect"
                          value="Redirect API Integration"
                        />
                        <FormLabel htmlFor="redirect">
                          Redirect API Integration
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          id="wordpress"
                          value="WordPress API Integration"
                        />
                        <FormLabel htmlFor="wordpress">
                          WordPress API Integration
                        </FormLabel>
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
