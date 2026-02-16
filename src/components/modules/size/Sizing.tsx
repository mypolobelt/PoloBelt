import Image from 'next/image';
import React from 'react';

const Sizing = () => {
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
            <div>
                {/* size guide */}
                <div>
                    <h2 className="uppercase text-3xl font-bold text-center py-10">sizing guide</h2>
                    <Image
                        src="/assets/Sizing_Guide.webp"
                        alt="Size Guide"
                        className="mx-auto p-5"
                        width={1000}
                        height={600}
                    />
                </div>
                {/* sizing table */}
                <div className='bg-[#f6f6f6]'>
                    <h2 className="uppercase text-3xl font-bold text-center py-10">Belt & collar sizing tables</h2>
                    <Image
                        src="/assets/Size_Table.webp"
                        alt="Size Guide"
                        className="mx-auto p-5"
                        width={1000}
                        height={600}
                    />
                </div>
            </div>
        </section>
    );
}
export default Sizing;