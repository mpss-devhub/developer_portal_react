import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useNavigate } from "react-router-dom";
import { authRepository } from "../repositories/authRepository";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const signUpSchema = z
  .object({
    name: z.string().nonempty("Full name is required"),
    email: z
      .string()
      .email("Please enter a valid email")
      .nonempty("Email is required"),
    phone: z
      .string()
      .min(10, "Please enter a valid phone number")
      .nonempty("Phone is required"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .nonempty("Password is required"),
    confirmPassword: z.string().nonempty("Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState(null);
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues,
  });

  const onSubmit = async (data) => {
    const response = await authRepository.register(data);
    if (response?.errors?.email) {
      setAlert(true);
      setAlertText(response?.errors?.email);
    } else if (response?.status_code === 200) {
      setAlert(false);
      dispatch(
        login({
          accessToken: response.access_token,
        })
      );
      localStorage.setItem("token", response.access_token);
      navigate("/check-email");
    } else {
      setAlert(true);
      setAlertText("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        {" "}
        <img
          src="/img/Octoverse Gateway logo-01.png"
          alt="Octoverse Gateway Logo"
          className="h-12 md:h-16 w-auto mx-auto mb-3"
        />
        <h3 className="text-base font-medium text-center mb-3 text-slate-500">
          Octoverse Developer Zone
        </h3>
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {alert && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Sign Up Failed!</AlertTitle>
                <AlertDescription>{alertText}</AlertDescription>
              </Alert>
            )}
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.name?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Phone</FormLabel>
                  <FormControl>
                    <PhoneInput
                      defaultCountry="mm"
                      {...field}
                      inputClassName="border rounded-md p-2 w-full bg-gray-50"
                      placeholder="Enter your phone number"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.phone?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Password</FormLabel>
                  <FormControl>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.password?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.confirmPassword?.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <p className="text-gray-500 text-sm">
              Already have an account?{" "}
              <a className="text-sky-600 cursor-pointer" href="/login">
                Sign In
              </a>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
