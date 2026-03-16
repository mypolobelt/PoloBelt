'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const BespokeSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
        hover: {
            y: -8,
            transition: {
                duration: 0.3,
            },
        },
    };

    const imageVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <div>
            <section className="bg-[#f3f3f3] py-12 md:py-20">
                <div className="w-11/12 mx-auto">

                    {/* Top Text */}
                    <motion.div
                        className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-xl md:text-3xl lg:text-5xl text-center font-medium text-[#5e5e5e]">
                            We provide bespoke Argentine style &apos;gaucho&apos; polo belts worldwide.
                        </h1>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div
                        className="text-center mb-8 md:mb-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.h2
                            className="text-xl md:text-3xl lg:text-4xl font-semibold tracking-wide"
                            variants={itemVariants}
                        >
                            CREATE YOUR BESPOKE POLO BELT
                        </motion.h2>

                        <motion.h3
                            className="text-lg md:text-2xl lg:text-3xl mt-4 md:mt-6 font-medium"
                            variants={itemVariants}
                        >
                            What We Offer
                        </motion.h3>

                        <motion.p
                            className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm md:text-lg"
                            variants={itemVariants}
                        >
                            Enjoy a host of images showcasing our previous projects, including belts,
                            stamps, dog collars and leads.
                        </motion.p>
                    </motion.div>

                    {/* Cards */}
                    <motion.div
                        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >

                        {/* Card 1 */}
                        <motion.div variants={cardVariants} whileHover="hover">
                            <Card className="bg-transparent shadow-none border-none h-full">
                                <CardContent className="p-0">
                                    <Link href="/bespoke-polo-belts">
                                        <motion.div
                                            className="overflow-hidden rounded-sm"
                                            variants={imageVariants}
                                            whileHover="hover"
                                        >
                                            <Image
                                                src="/assets/Bespoke_Belts.webp"
                                                alt="Bespoke Polo Belts"
                                                width={500}
                                                height={350}
                                                className="w-full h-56 md:h-64 lg:h-65 object-cover cursor-pointer"
                                            />
                                        </motion.div>
                                    </Link>

                                    <div className="mt-4 md:mt-6 space-y-3">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-xl md:text-2xl lg:text-3xl font-base">Bespoke Polo Belts</h4>
                                        </div>

                                        <p className="text-[#5e5e5e] text-sm md:text-base lg:text-lg">
                                            Click <Link href="/bespoke-belts" className="underline hover:text-gray-900 text-gray-800 transition-colors">here</Link> to see
                                            examples of different bespoke gaucho polo belt designs.
                                            For Men and Women.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div variants={cardVariants} whileHover="hover">
                            <Card className="bg-transparent shadow-none border-none h-full">
                                <CardContent className="p-0">
                                    <Link href="/intricate-stamps">
                                        <motion.div
                                            className="overflow-hidden rounded-sm"
                                            variants={imageVariants}
                                            whileHover="hover"
                                        >
                                            <Image
                                                src="/assets/Intricate_Stamps.webp"
                                                alt="Intricate Stamps"
                                                width={500}
                                                height={350}
                                                className="w-full h-56 md:h-64 lg:h-65 object-cover cursor-pointer"
                                            />
                                        </motion.div>
                                    </Link>

                                    <div className="mt-4 md:mt-6 space-y-3">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-xl md:text-2xl lg:text-3xl font-base">Intricate Stamps</h4>
                                        </div>

                                        <p className="text-[#5e5e5e] text-sm md:text-base lg:text-lg">
                                            Click <Link href="/intricate-stamps" className="underline hover:text-gray-900 text-gray-800 transition-colors">here</Link> to see
                                            examples of our bespoke stamps. We promise the most incredible
                                            level of detail.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div variants={cardVariants} whileHover="hover">
                            <Card className="bg-transparent shadow-none border-none h-full">
                                <CardContent className="p-0">
                                    <Link href="/dog-collars-leads">
                                        <motion.div
                                            className="overflow-hidden rounded-sm"
                                            variants={imageVariants}
                                            whileHover="hover"
                                        >
                                            <Image
                                                src="/assets/Dog_Collar.webp"
                                                alt="Dog Collars & Leads"
                                                width={500}
                                                height={350}
                                                className="w-full h-56 md:h-64 lg:h-65 object-cover cursor-pointer"
                                            />
                                        </motion.div>
                                    </Link>

                                    <div className="mt-4 md:mt-6 space-y-3">
                                        <div className="flex justify-between items-center">
                                            <h4 className="text-xl md:text-2xl lg:text-3xl font-base">Dog Collars & Leads</h4>
                                        </div>

                                        <p className="text-[#5e5e5e] text-sm md:text-base lg:text-lg">
                                            Click <Link href="/dog-collars-leads" className="underline hover:text-gray-900 text-gray-800 transition-colors">here</Link> to see
                                            examples of our bespoke gaucho dog collars.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                    </motion.div>

                    {/* Footer Note */}
                    <motion.p
                        className="text-center text-gray-500 mt-12 md:mt-16 text-xs sm:text-sm md:text-base"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        *prices vary depending on the quantity of bespoke polo belts ordered
                    </motion.p>

                </div>
            </section>
        </div>
    );
};

export default BespokeSection;