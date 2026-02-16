import Image from 'next/image';
import React from 'react';

const PoloLogo2 = () => {
    return (
        <div>
            <div className='bg-[#0f1526] p-5'>
                <div className="flex items-center justify-center px-4">
                    <div className="bg-white border-4 border-black px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-xl flex items-center gap-4 md:gap-6">

                        <Image
                            src="/assets/logo.webp"
                            alt="Polo Belts Logo"
                            priority
                            className="object-cover w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                            width={80}
                            height={80}
                        />

                        {/* Brand Name */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide text-gray-800">
                            My Polo Belt
                        </h1>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoloLogo2;