'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import PoloLogo2 from '../shared/PoloLogo2';

const DogCollarsGallery = () => {
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
            { src: "/assets/dog/DogCollor1.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/DogCollor4.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/DogCollor7.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/DogCollor13.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/DogCollor8.webp", alt: "Blue rope dog collar and lead" },],
        // Column 2
        [
            { src: "/assets/dog/DogCollor2.webp", alt: "Blue rope dog collar and lead", tall: true },
            { src: "/assets/dog/DogCollor5.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/DogCollor8.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/DogCollor10.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/DogCollor11.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/DogCollor14.webp", alt: "Blue rope dog collar and lead" },
        ],
        // Column 3
        [
            { src: "/assets/dog/DogCollor3.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/DogCollor6.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/DogCollor9.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/DogCollor12.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/DogCollor15.webp", alt: "Blue rope dog collar and lead" },],
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
                    Dog Collars & Leads
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
                                        height={image.tall ? 200 : 150}
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

export default DogCollarsGallery;