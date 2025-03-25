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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { authRepository } from "../repositories/authRepository";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .nonempty("Password is required"),
});

const defaultValues = {
  email: "",
  password: "",
};

export const Login = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const [backend_message, setBackendMessage] = useState("Invalid credentials");
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  const onSubmit = async (data) => {
    const response = await authRepository.login(data);
    if (response?.status_code == "400") {
      setAlert(true);
    } else if (response?.status_code == "403") {
      setAlert(true);
      setBackendMessage(response?.message);
    } else {
      setAlert(false);
      localStorage.setItem("token", response.data.access_token);
      const userDetail = await authRepository.userDetail();
      dispatch(
        login({
          accessToken: response.data.access_token,
          userDetail: userDetail,
        })
      );
      navigate("/");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <img
          src="/img/Octoverse Gateway logo-01.png"
          alt="Octoverse Gateway Logo"
          className="h-12 md:h-16 w-auto mx-auto mb-3"
        />
        <h3 className="text-base font-medium text-center mb-3 text-slate-500">
          Octoverse Developer Zone
        </h3>
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {alert && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Login Failed!</AlertTitle>
                <AlertDescription>{backend_message}</AlertDescription>
              </Alert>
            )}
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
            {/* <a
                href="/forgot-password"
                className="text-sky-600 cursor-pointer text-sm"
              >
                Forgot password?
              </a> */}
            <Button type="submit" className="w-full">
              Log In
            </Button>
            <p className="text-gray-500 text-sm">
              Don't have an account?{" "}
              <a className="text-sky-600 cursor-pointer" href="/signup">
                Sign Up
              </a>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
