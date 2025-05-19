import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { authRepository } from "../repositories/authRepository";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useState } from "react";
import { AlertCircle } from "lucide-react";

const otpSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email")
    .nonempty("Email is required"),
  otp: z
    .string()
    .min(6, "OTP must be at least 6 characters long")
    .nonempty("OTP is required"),
});

const defaultValues = {
  email: localStorage.getItem("email"),
  otp: "",
};

const OTP = () => {
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState(null);
  const form = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await authRepository.verifyOtp(data);
      if (response.status_code === 200) {
        localStorage.setItem("token", response.data.access_token);
        dispatch(
          login({
            accessToken: response.data.access_token,
          })
        );
        navigate("/");
      } else {
        setAlert(true);
        setAlertText(response.message);
      }
    } catch (error) {
      console.error("Verification failed:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Verify your Email
            </h2>
            {alert && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Failed!</AlertTitle>
                <AlertDescription>{alertText}</AlertDescription>
              </Alert>
            )}
            <FormField
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">
                    Enter your OTP
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="otp"
                      type="otp"
                      placeholder="Enter your otp"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full mt-4">
              Verify
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default OTP;
