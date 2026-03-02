'use client';

import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ConnectSection() {
    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
        hover: {
            scale: 1.15,
            transition: {
                duration: 0.2,
            },
        },
    };
    return (
        <section className="bg-[#17243c] py-10 md:py-20">
            <div className="max-w-4xl mx-auto text-center">

                {/* Title */}
                <motion.h2
                    className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide mb-10"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    CONNECT WITH US
                </motion.h2>

                {/* Social Icons */}
                <motion.div
                    className="flex items-center justify-center gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >

                    {/* Facebook */}
                    <motion.div
                        variants={iconVariants}
                        whileHover="hover"
                    >
                        <Link
                            href="https://www.facebook.com/mypolobelt"
                            target="blank"
                            className="w-12 h-12 rounded-full bg-white flex items-center justify-center 
                           transition-all duration-300 hover:bg-gray-200"
                        >
                            <Facebook className="size-6 text-[#17243c] fill-[#17243c]" />
                        </Link>
                    </motion.div>

                    {/* Instagram */}
                    <motion.div
                        variants={iconVariants}
                        whileHover="hover"
                    >
                        <Link
                            href="https://www.instagram.com/mypolobelt"
                            target="blank"
                            className="w-12 h-12 rounded-full bg-white flex items-center justify-center 
                           transition-all duration-300 hover:bg-gray-200"
                        >
                            <Instagram className="size-6 text-[#17243c] " />
                        </Link>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}
