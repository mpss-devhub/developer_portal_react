import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { authRepository } from "../repositories/authRepository";
import { useLocation, useNavigate } from "react-router-dom";

const Verify = () => {
  const form = useForm();
  const navigate = useNavigate();
  const { handleSubmit } = form;
  const location = useLocation();
  const queryString = location.search.slice(1);
  const onSubmit = async () => {
    try {
      const response = await authRepository.emailVerify(queryString);
      if(response.status_code === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Verification failed:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Verify Email
            </h2>
            <p className="text-center">
              Please click the button below to verify your email.
            </p>
            <Button type="submit" className="w-full mt-4">
              Verify
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default Verify;
