'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import PoloLogo2 from '../shared/PoloLogo2';

const IntricateStampsGallery = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
            },
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3,
            },
        },
    };
    // Organize images by column for manual masonry control
    const columns = [
        // Column 1
        [
            { src: "/assets/stamps/Stamp1.webp", alt: "Intricate stamp on leather belt" },
            { src: "/assets/stamps/Stamp2.webp", alt: "Intricate stamp on leather belt" },
            { src: "/assets/stamps/Stamp3.webp", alt: "Intricate stamp on leather belt" },
            { src: "/assets/stamps/Stamp4.webp", alt: "Intricate stamp on leather belt" },
            { src: "/assets/stamps/Stamp5.webp", alt: "Intricate stamp on leather belt" },
            { src: "/assets/stamps/Stamp11.webp", alt: "Intricate stamp on leather belt" },
        ],
        // Column 2
        [
            { src: "/assets/stamps/Stamp6.webp", alt: "Intricate stamp on leather belt" },
            { src: "/assets/stamps/Stamp7.webp", alt: "Intricate stamp on leather belt" },
            { src: "/assets/stamps/Stamp8.webp", alt: "Intricate stamp on leather belt" },
            { src: "/assets/stamps/Stamp9.webp", alt: "Intricate stamp on leather belt" },
            { src: "/assets/stamps/Stamp10.webp", alt: "Intricate stamp on leather belt" },
        ],
        // Column 3
        [
            { src: "/assets/stamps/Stamp12.webp", alt: "Intricate stamp on leather belt" },
            { src: "/assets/stamps/Stamp13.webp", alt: "Intricate stamp on leather belt" },
            { src: "/assets/stamps/Stamp14.webp", alt: "Intricate stamp on leather belt" },
            { src: "/assets/stamps/Stamp15.webp", alt: "Intricate stamp on leather belt" },
            { src: "/assets/stamps/Stamp16.webp", alt: "Intricate stamp on leather belt" },
        ]
    ]
    return (
        <section className="w-full">
            <PoloLogo2 />
            <div className="max-w-full sm:max-w-6xl lg:max-w-5xl mx-auto px-4 sm:px-6">
                <motion.h2
                    className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center my-4 sm:my-6 text-gray-900 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    Intricate stamps
                </motion.h2>

                {/* Three Column Layout */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 gap-1 md:gap-2 py-6 sm:py-8 md:py-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                >
                    {columns.map((column, colIndex) => (
                        <div
                            key={colIndex}
                            className={`flex flex-col gap-1 md:gap-2 ${colIndex === 2 ? 'hidden sm:flex' : ''}`}
                        >
                            {column.map((image, imgIndex) => (
                                <motion.div
                                    key={imgIndex}
                                    className="relative overflow-hidden hover:opacity-95 transition-opacity cursor-pointer"
                                    variants={imageVariants}
                                    whileHover="hover"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-auto object-cover"
                                        height={300}
                                        width={500}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
};

export default IntricateStampsGallery;