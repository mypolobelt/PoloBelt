import Image from 'next/image';
import React from 'react';

const DogCollarsGallery = () => {
    // Organize images by column for manual masonry control
    const columns = [
        // Column 1
        [
            { src: "/assets/dog/Dogcollor1.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/Dogcollor4.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/Dogcollor7.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/Dogcollor13.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/Dogcollor8.webp", alt: "Blue rope dog collar and lead" },],
        // Column 2
        [
            { src: "/assets/dog/Dogcollor2.webp", alt: "Blue rope dog collar and lead", tall: true },
            { src: "/assets/dog/Dogcollor5.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/Dogcollor8.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/Dogcollor10.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/Dogcollor11.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/Dogcollor14.webp", alt: "Blue rope dog collar and lead" },
        ],
        // Column 3
        [
            { src: "/assets/dog/Dogcollor3.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/Dogcollor6.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/Dogcollor9.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/Dogcollor12.webp", alt: "Blue rope dog collar and lead" },
            { src: "/assets/dog/Dogcollor15.webp", alt: "Blue rope dog collar and lead" },],
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
                    Dog Collars & Leads
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