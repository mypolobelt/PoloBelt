import Image from 'next/image';
import React from 'react';

const PoloLogo = () => {
    return (
        <div>
            {/* Center Logo Card */}
            <div className="absolute top-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
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
    );
};

export default PoloLogo;