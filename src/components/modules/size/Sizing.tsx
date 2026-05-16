'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Sizing = () => {
    const headerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
            },
        },
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    const imageVariants = {
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.3,
            },
        },
    };
    return (
        <section className="w-full">
            <div className='bg-[#0f1526] p-5'>
                <motion.div
                    className="flex items-center justify-center"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="bg-white border-4 border-black px-10 py-6 shadow-xl flex items-center gap-6">

                        <Image
                            src="/assets/logo.webp"
                            alt="Polo Belts Logo"
                            priority
                            className="object-cover"
                            width={80}
                            height={80}
                        />

                        {/* Brand Name */}
                        <motion.h1
                            className="text-2xl sm:text-3xl md:text-4xl   tracking-wide text-gray-800"
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            My Polo Belt
                        </motion.h1>

                    </div>
                </motion.div>
            </div>
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                {/* size guide */}
                <div>
                    <motion.h2
                        className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center py-10"
                        variants={sectionVariants}
                    >
                        sizing guide
                    </motion.h2>
                    <motion.div
                        whileHover="hover"
                        variants={imageVariants}
                    >
                        <Image
                            src="/assets/Sizing_Guide.webp"
                            alt="Size Guide"
                            className="mx-auto p-5"
                            width={1000}
                            height={600}
                        />
                    </motion.div>
                </div>
                {/* sizing table */}
                <div className='bg-[#f6f6f6]'>
                    <motion.h2
                        className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center py-10"
                        variants={sectionVariants}
                    >
                        Belt & collar sizing tables
                    </motion.h2>
                    <motion.div
                        whileHover="hover"
                        variants={imageVariants}
                    >
                        <Image
                            src="/assets/Size_Table.webp"
                            alt="Size Guide"
                            className="mx-auto p-5"
                            width={1000}
                            height={600}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
export default Sizing;