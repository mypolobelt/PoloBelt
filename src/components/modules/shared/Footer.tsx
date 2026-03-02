'use client';

import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { SiGodaddy } from "react-icons/si"
import { motion } from "framer-motion"

export default function Footer() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };
    return (
        <footer className="bg-[#161616] text-gray-300">
            <motion.div
                className="container flex flex-col items-center justify-center mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >

                {/* Copyright */}
                <motion.p
                    className="text-base sm:text-lg text-[#a9a9a9] mb-4 md:mb-6 text-center"
                    variants={itemVariants}
                >
                    Copyright @{new Date().getFullYear()} MyPoloBelt - All Rights Reserved.
                </motion.p>

                {/* Links */}
                <motion.div
                    className="flex flex-col items-center md:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm mb-6 sm:mb-8 md:mb-10"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <Link
                            href="/about"
                            className="hover:text-white transition-colors"
                        >
                            About Us
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Link
                            href="/contact"
                            className="hover:text-white transition-colors"
                        >
                            Contact Us
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Link
                            href="/privacy-policy"
                            className="hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Small Divider */}
                <motion.div
                    className="w-12 sm:w-16 mb-4 sm:mb-6"
                    variants={itemVariants}
                >
                    <Separator className="bg-gray-700" />
                </motion.div>

                {/* Powered By */}
                <motion.div
                    className="flex flex-col items-center gap-2"
                    variants={containerVariants}
                >
                    <motion.span
                        className="text-base sm:text-lg text-gray-400"
                        variants={itemVariants}
                    >
                        Powered by
                    </motion.span>

                    <motion.div variants={itemVariants}>
                        <Link
                            href="https://www.godaddy.com/airo"
                            target="_blank"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <span className="font-semibold flex items-center gap-2 text-xs sm:text-sm">
                                <SiGodaddy /> GoDaddy Airo
                            </span>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </footer>
    )
}