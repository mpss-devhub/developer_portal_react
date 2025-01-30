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
import {
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  getAuth,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const auth = getAuth();

// Define Action Code Settings for Email Link Sign-In
const actionCodeSettings = {
  url: "http://localhost:5173/finishSignUp", // Change to your actual domain in production
  handleCodeInApp: true,
};

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
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues,
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { name, email, password, phone } = data;
    try {
      // Create User in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredential.user.uid;

      // Store user details in Firestore
      await setDoc(doc(db, "users", userId), {
        name,
        email,
        phone,
        createdAt: new Date().toISOString(),
      });

      // Send Sign-in Link to Email
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      navigate("/verify-email"); // Redirect to a confirmation page
    } catch (error) {
      form.setError("email", {
        type: "manual",
        message: error.message,
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
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
