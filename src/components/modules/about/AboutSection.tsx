import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
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


            <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Left Content */}
                <div className="flex items-center px-6 md:px-32 md:py-36">
                    <div className="max-w-xl space-y-6">

                        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-[#0B1B3F]">
                            ABOUT US
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800">
                            Bespoke Belts and Dog Collars
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            We offer a bespoke belt service – a chance for you to create your
                            very own custom polo belt. Each belt is designed by you, for you.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            You can choose from a wide range of colours that can be used for a
                            variety of different designs. We also offer a stamping service where
                            you can have any symbol/logo stamped onto your belt.
                        </p>

                        <h4 className="text-lg font-semibold text-gray-800">
                            Previous Customers
                        </h4>

                        <p className="text-gray-600 leading-relaxed">
                            We have created a number of belts for individuals as well as
                            larger projects for military regiments, polo teams and schools.
                        </p>

                        <p className="text-gray-600 font-medium">
                            Contact us to start your project now!
                        </p>

                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-full">
                    <Image
                        src="/assets/belt1.webp" // put your image inside public folder
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