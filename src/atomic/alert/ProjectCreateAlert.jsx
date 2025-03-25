import React, { useState } from "react";
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
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectRepository } from "../../repositories/projectRepository";

const projectCreateSchema = z.object({
  pj_name: z.string().nonempty("Email is required"),
  type: z.string().nonempty("Password is required"),
});

const defaultValues = {
  pj_name: "",
  type: "",
};

const ProjectCreateAlert = ({ onProjectCreated }) => {
  const [open, setOpen] = useState(false);
  const form = useForm({
    resolver: zodResolver(projectCreateSchema),
    defaultValues,
  });

  const onSubmit = async (data) => {
    const response = await projectRepository.createProject(data);
    form.reset(defaultValues);
    onProjectCreated();
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => setOpen(true)}
        >
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
              name="pj_name"
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
              name="type"
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
              <Button type="submit">Create a Project</Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProjectCreateAlert;
