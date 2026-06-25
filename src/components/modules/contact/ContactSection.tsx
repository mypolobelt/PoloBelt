'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PoloLogo2 from '../shared/PoloLogo2';

const ContactSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
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
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.3,
            },
        },
    };
    return (
        <section>
            {/* logo */}
            <PoloLogo2 />
            <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-7/12 mx-auto px-4 sm:px-6 my-6">
                {/* Heading */}
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center my-6 sm:my-8 md:my-10 tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    CONTACT US
                </motion.h2>

                {/* Content Grid */}
                <motion.div
                    className="flex flex-col md:flex-row justify-evenly items-center gap-8 md:gap-6 lg:gap-8 p-4 sm:p-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >

                    {/* Left Side */}
                    <motion.div
                        className="flex flex-col gap-4 sm:gap-6 w-full md:w-1/2"
                        variants={itemVariants}
                    >
                        <motion.h3
                            className="text-lg sm:text-xl md:text-2xl font-semibold"
                            variants={itemVariants}
                        >
                            Design the perfect belt
                        </motion.h3>

                        <motion.p
                            className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed"
                            variants={itemVariants}
                        >
                            Please get in touch if you would like further information about
                            designing your bespoke belt. We would be more than happy to
                            discuss designs, colours and prices.
                        </motion.p>
                        <motion.p
                            className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed"
                            variants={itemVariants}
                        >
                            If you need any support with creating your belt design,
                            please get in touch directly at {""}
                            <strong>sales@mypolobelt.com</strong>
                        </motion.p>

                        <motion.div
                            className="pt-4 sm:pt-6 space-y-2"
                            variants={itemVariants}
                        >
                            <h4 className="text-base sm:text-lg md:text-lg font-medium">My Polo Belt</h4>
                            <p className="text-sm sm:text-base md:text-base text-gray-600">Wiltshire, UK</p>
                            <p className="text-sm sm:text-base md:text-base text-gray-600">sales@mypolobelt.com</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mt-4 sm:mt-6">
                            <a href="mailto:sales@mypolobelt.com">
                                <Button className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                                    Get in Touch
                                </Button>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Side Image */}
                    <motion.div
                        className="relative w-full md:w-1/2"
                        variants={imageVariants}
                        whileHover="hover"
                    >
                        <Image
                            src="/assets/Horse_Belt.webp"
                            alt="Polo Belt"
                            className="object-cover w-full h-auto"
                            width={600}
                            height={400}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;