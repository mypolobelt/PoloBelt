import Image from 'next/image';
import React from 'react';
import PoloLogo2 from '../shared/PoloLogo2';

const DogCollarsGallery = () => {
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
                <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl font-bold text-center my-4 sm:my-6 text-gray-900 tracking-tight">
                    Dog Collars & Leads
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
                                        height={image.tall ? 200 : 150}
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

export default DogCollarsGallery;