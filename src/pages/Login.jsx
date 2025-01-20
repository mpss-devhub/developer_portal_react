import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email').nonempty('Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long').nonempty('Password is required'),
});

const defaultValues = {
  email: '',
  password: '',
};

function Login() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Email</FormLabel>
                  <FormControl>
                    <Input id="email" type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Password</FormLabel>
                  <FormControl>
                    <Input id="password" type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage>{form.formState.errors.password?.message}</FormMessage>
                </FormItem>
              )}
            />

            <a className="text-sky-600 cursor-pointer text-sm">Forgot password?</a>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-gray-500 text-sm font-normal">Accept Terms and Conditions</Label>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Log In
            </Button>

            <p className="text-gray-500 text-sm">
              Don't have an account? <a className="text-sky-600 cursor-pointer" href='/signup'>Sign Up</a>
            </p>

          </form>
        </Form>
      </div>
    </div>
  );
}

export default Login;
