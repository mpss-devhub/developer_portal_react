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
const ProjectCreateAlert = () => {
  const form = useForm({
    defaultValues: {
      projectName: "",
      integrationType: "direct",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
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
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">
                    Select an Integration Type
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      {...field}
                      value={field.value}
                      onChange={field.onChange}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-2 ">
                        <RadioGroupItem id="direct" value="direct" />
                        <FormLabel htmlFor="direct">
                          Direct API Integration
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="redirect" value="redirect" />
                        <FormLabel htmlFor="redirect">
                          Redirect API Integration
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="wordpress" value="wordpress" />
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
