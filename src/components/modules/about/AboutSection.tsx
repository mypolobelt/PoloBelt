'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import PoloLogo2 from '../shared/PoloLogo2';

const AboutSection = () => {
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

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
            },
        },
    };

    return (
        <section className="w-full">
            <PoloLogo2 />
            <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Left Content */}
                <motion.div
                    className="flex items-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-24 lg:py-32 xl:py-36"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="max-w-xl space-y-4 sm:space-y-5 md:space-y-6">

                        <motion.h2
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-[#0B1B3F]"
                            variants={itemVariants}
                        >
                            ABOUT US
                        </motion.h2>

                        <motion.h3
                            className="text-base sm:text-lg md:text-xl font-semibold text-gray-800"
                            variants={itemVariants}
                        >
                            Bespoke Belts and Dog Collars
                        </motion.h3>

                        <motion.p
                            className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed"
                            variants={itemVariants}
                        >
                            We offer a bespoke belt service – a chance for you to create your
                            very own custom polo belt. Each belt is designed by you, for you.
                        </motion.p>

                        <motion.p
                            className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed"
                            variants={itemVariants}
                        >
                            You can choose from a wide range of colours that can be used for a
                            variety of different designs. We also offer a stamping service where
                            you can have any symbol/logo stamped onto your belt.
                        </motion.p>

                        <motion.h4
                            className="text-base sm:text-lg md:text-lg font-semibold text-gray-800 pt-2"
                            variants={itemVariants}
                        >
                            Previous Customers
                        </motion.h4>

                        <motion.p
                            className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed"
                            variants={itemVariants}
                        >
                            We have created a number of belts for individuals as well as
                            larger projects for military regiments, polo teams and schools.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="relative w-full h-100 sm:h-125 md:h-auto min-h-100"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <Image
                        src="/assets/belt1.webp"
                        alt="Polo Belt"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default AboutSection;