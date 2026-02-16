import Image from 'next/image';
import React from 'react';

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
            <div className='bg-[#0f1526] p-5'>
                <div className="flex items-center justify-center">
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
                        <h1 className="text-3xl md:text-4xl font-serif tracking-wide text-gray-800">
                            My Polo Belt
                        </h1>

                    </div>
                </div>
            </div>
            <div className="max-w-5xl mx-auto">
                <h2 className="uppercase text-5xl font-bold text-center my-6 text-gray-900 tracking-tight">
                    Intricate stamps
                </h2>

                {/* Three Column Layout */}
                <div className="grid grid-cols-3 gap-1 md:gap-2 py-10">
                    {columns.map((column, colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-1 md:gap-2">
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