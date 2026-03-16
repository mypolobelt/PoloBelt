'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import PoloLogo2 from '../shared/PoloLogo2';

const BespokeBeltsGallery = () => {
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
            { src: "/assets/belts/Belt1.webp", alt: "Bespoke belt with intricate stamp" },
            { src: "/assets/belts/Belt2.webp", alt: "Bespoke belt with intricate stamp" },
            { src: "/assets/belts/Belt3.webp", alt: "Bespoke belt with intricate stamp" },
            { src: "/assets/belts/Belt4.webp", alt: "Bespoke belt with intricate stamp" },
            { src: "/assets/belts/Belt5.webp", alt: "Bespoke belt with intricate stamp" },
            { src: "/assets/belts/Belt18.webp", alt: "Bespoke belt with intricate stamp" },
        ],
        // Column 2
        [
            { src: "/assets/belts/Belt6.webp", alt: "Bespoke belt with intricate stamp", tall: true },
            { src: "/assets/belts/Belt7.webp", alt: "Bespoke belt with intricate stamp" },
            { src: "/assets/belts/Belt8.webp", alt: "Bespoke belt with intricate stamp" },
            { src: "/assets/belts/Belt9.webp", alt: "Bespoke belt with intricate stamp" },
            { src: "/assets/belts/Belt10.webp", alt: "Bespoke belt with intricate stamp" },
        ],
        // Column 3
        [
            { src: "/assets/belts/Belt12.webp", alt: "Bespoke belt with intricate stamp" },
            { src: "/assets/belts/Belt13.webp", alt: "Bespoke belt with intricate stamp" },
            { src: "/assets/belts/Belt14.webp", alt: "Bespoke belt with intricate stamp" },
            { src: "/assets/belts/Belt15.webp", alt: "Bespoke belt with intricate stamp" },
            { src: "/assets/belts/Belt16.webp", alt: "Bespoke belt with intricate stamp" },
            { src: "/assets/belts/Belt11.webp", alt: "Bespoke belt with intricate stamp" },
        ],
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
                    Bespoke Polo belts
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

export default BespokeBeltsGallery;