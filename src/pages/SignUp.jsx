import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from 'react-international-phone';
import "react-international-phone/style.css";

const loginSchema = z.object({
    email: z.string().email('Please enter a valid email').nonempty('Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters long').nonempty('Password is required'),
    phone: z.string().min(10, 'Please enter a valid phone number').nonempty('Phone is required'),
});

const defaultValues = {
    email: '',
    password: '',
    phone: '',
};

function SignUp() {
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
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">Full Name</FormLabel>
                                    <FormControl>
                                        <Input id="name" type="text" placeholder="Enter your name" {...field} />
                                    </FormControl>
                                    <FormMessage>{form.formState.errors.name?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
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

                        {/* Phone Field with Country Code */}
                        <FormField
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">Phone</FormLabel>
                                    <FormControl>
                                        <PhoneInput
                                            defaultCountry='mm'
                                            value={field.value}
                                            onChange={(value) => field.onChange(value)}
                                            inputClassName="border rounded-md p-2 w-full bg-gray-50"
                                            placeholder="Enter your phone number"
                                        />
                                    </FormControl>
                                    <FormMessage>{form.formState.errors.phone?.message}</FormMessage>
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

                        <FormField
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-gray-700">Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input id="confirmPassword" type="password" placeholder="Enter your Confirm Password" {...field} />
                                    </FormControl>
                                    <FormMessage>{form.formState.errors.confirmPassword?.message}</FormMessage>
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <Button type="submit" className="w-full">
                            Sign Up
                        </Button>

                        <p className="text-gray-500 text-sm">
                            Don't have an account? <a className="text-sky-600 cursor-pointer" href='/login'>Sign In</a>
                        </p>
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default SignUp;
