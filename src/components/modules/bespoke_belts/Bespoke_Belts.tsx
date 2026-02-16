import Image from 'next/image';

const BespokeBeltsGallery = () => {
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
                    Bespoke Polo belts
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

export default BespokeBeltsGallery;