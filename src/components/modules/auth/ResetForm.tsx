"use client"

import Link from "next/link";
import { useState } from "react";
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
});

const ResetPassword = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });


    return (
        <section>
            <PoloLogo2 />
            <div className="my-32 bg-white flex items-center justify-center px-4">
                <div className="w-full max-w-2xl">
                    {!isSubmitted ? (
                        <>
                            <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0f1526] mb-6">
                                RESET PASSWORD
                            </h1>

                            <p className="text-center text-gray-600 text-lg mb-12">
                                Enter your email address, and we&apos;ll send you a password reset link.
                            </p>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(() => setIsSubmitted(true))} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder="Email address"
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
                                            className="px-12 py-6 text-lg font-medium"
                                        >
                                            Send reset link
                                        </Button>

                                        <p className="text-gray-600 text-lg">
                                            Don&apos;t need to reset your password?{" "}
                                            <Link
                                                href="/signin"
                                                className="text-[#0f1526] font-medium hover:underline"
                                            >
                                                Sign in.
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </Form>
                        </>
                    ) : (
                        <>
                            <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0f1526] mb-6">
                                REQUEST SENT!
                            </h1>

                            <p className="text-center text-gray-600 text-lg mb-8">
                                Check your inbox for your link to reset your password. If you don&apos;t get a link in your email, please validate your membership with the website owner.
                            </p>

                            <p className="text-center text-gray-600 text-lg">
                                Don&apos;t need to reset your password?{" "}
                                <Link
                                    href="/signin"
                                    className="text-[#0f1526] font-medium hover:underline"
                                >
                                    Sign in.
                                </Link>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ResetPassword;