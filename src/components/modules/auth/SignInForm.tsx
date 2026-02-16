"use client"

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PoloLogo2 from "../shared/PoloLogo2";

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
});

const SignIn = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    return (
        <section>
            <PoloLogo2 />
            <div className="my-10 flex items-center justify-center px-4">
                <div className="w-full max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0f1526] mb-6">
                        ACCOUNT SIGN IN
                    </h1>

                    <p className="text-center text-gray-600 text-lg mb-12">
                        Sign in to your account to access your profile, history, and any private pages you&apos;ve been granted access to.
                    </p>

                    <Form {...form}>
                        <form className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Email"
                                                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-[#0f1526] focus-visible:ring-0 focus-visible:ring-offset-0 text-lg placeholder-gray-500 rounded-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Password"
                                                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-[#0f1526] focus-visible:ring-0 focus-visible:ring-offset-0 text-lg placeholder-gray-500 rounded-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex flex-col items-center gap-6 mt-12">
                                <Button
                                    type="submit"
                                    className=" text-white px-16 py-6 text-lg font-medium"
                                >
                                    Sign in
                                </Button>

                                <Link
                                    href="/reset-password"
                                    className="text-[#0f1526] text-lg hover:underline"
                                >
                                    Reset password
                                </Link>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default SignIn;