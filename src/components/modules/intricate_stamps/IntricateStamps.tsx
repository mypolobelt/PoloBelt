import Image from 'next/image';
import React from 'react';
import PoloLogo2 from '../shared/PoloLogo2';

const IntricateStampsGallery = () => {
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
                <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl font-bold text-center my-4 sm:my-6 text-gray-900 tracking-tight">
                    Intricate stamps
                </h2>

                {/* Three Column Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 md:gap-2 py-6 sm:py-8 md:py-10">
                    {columns.map((column, colIndex) => (
                        <div
                            key={colIndex}
                            className={`flex flex-col gap-1 md:gap-2 ${colIndex === 2 ? 'hidden sm:flex' : ''}`}
                        >
                            {column.map((image, imgIndex) => (
                                <div
                                    key={imgIndex}
                                    className="relative overflow-hidden hover:opacity-95 transition-opacity cursor-pointer"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-auto object-cover"
                                        height={300}
                                        width={500}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default IntricateStampsGallery;