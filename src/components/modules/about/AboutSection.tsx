import Image from 'next/image';
import React from 'react';
import PoloLogo2 from '../shared/PoloLogo2';

const AboutSection = () => {
    return (
        <section className="w-full">
            <PoloLogo2 />
            <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Left Content */}
                <div className="flex items-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-24 lg:py-32 xl:py-36">
                    <div className="max-w-xl space-y-4 sm:space-y-5 md:space-y-6">

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#0B1B3F]">
                            ABOUT US
                        </h2>

                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                            Bespoke Belts and Dog Collars
                        </h3>

                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            We offer a bespoke belt service – a chance for you to create your
                            very own custom polo belt. Each belt is designed by you, for you.
                        </p>

                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            You can choose from a wide range of colours that can be used for a
                            variety of different designs. We also offer a stamping service where
                            you can have any symbol/logo stamped onto your belt.
                        </p>

                        <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                            Previous Customers
                        </h4>

                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            We have created a number of belts for individuals as well as
                            larger projects for military regiments, polo teams and schools.
                        </p>

                        <p className="text-sm sm:text-base text-gray-600 font-medium">
                            Contact us to start your project now!
                        </p>

                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-full h-100 sm:h-125 md:h-auto min-h-100">
                    <Image
                        src="/assets/belt1.webp"
                        alt="Polo Belt"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

            </div>
        </section>
    );
};

export default AboutSection;