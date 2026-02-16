import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BespokeSection = () => {
    return (
        <div>
            <section className="bg-[#f3f3f3] py-20">
                <div className="w-11/12 mx-auto">

                    {/* Top Text */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-16">
                        <h1 className="text-3xl md:text-5xl font-medium text-[#5e5e5e]">
                            We provide bespoke Argentine style &apos;gaucho&apos; polo belts worldwide.
                        </h1>

                        <Link href="/contact">
                            <Button>
                                Contact Us
                            </Button>
                        </Link>
                    </div>

                    {/* Main Heading */}
                    <div className=" text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
                            CREATE YOUR BESPOKE POLO BELT
                        </h2>

                        <h3 className="text-2xl mt-6 font-medium">What We Offer</h3>

                        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                            Enjoy a host of images showcasing our previous projects, including belts,
                            stamps, dog collars and leads.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                        {/* Card 1 */}
                        <Card className="bg-transparent shadow-none border-none">
                            <CardContent className="p-0">
                                <Link href="/bespoke-polo-belts">
                                    <Image
                                        src="/assets/Bespoke_Belts.webp"
                                        alt="Bespoke Polo Belts"
                                        width={500}
                                        height={350}
                                        className="w-full h-65 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                    />
                                </Link>

                                <div className="mt-6 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-xl font-medium">Bespoke Polo Belts</h4>
                                        <span className="text-lg">£25*</span>
                                    </div>

                                    <p className="text-gray-600 text-lg">
                                        Click <Link href="/bespoke-belts" className="underline hover:text-gray-900 transition-colors">here</Link> to see
                                        examples of different bespoke gaucho polo belt designs.
                                        For Men and Women.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 2 */}
                        <Card className="bg-transparent shadow-none border-none">
                            <CardContent className="p-0">
                                <Link href="/intricate-stamps">
                                    <Image
                                        src="/assets/Intricate_Stamps.webp"
                                        alt="Intricate Stamps"
                                        width={500}
                                        height={350}
                                        className="w-full h-65 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                    />
                                </Link>

                                <div className="mt-6 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-xl font-medium">Intricate Stamps</h4>
                                        <span className="text-lg">£12*</span>
                                    </div>

                                    <p className="text-gray-600 text-lg">
                                        Click <Link href="/intricate-stamps" className="underline hover:text-gray-900 transition-colors">here</Link> to see
                                        examples of our bespoke stamps. We promise the most incredible
                                        level of detail.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 3 */}
                        <Card className="bg-transparent shadow-none border-none">
                            <CardContent className="p-0">
                                <Link href="/dog-collars-leads">
                                    <Image
                                        src="/assets/Dog_Collar.webp"
                                        alt="Dog Collars & Leads"
                                        width={500}
                                        height={350}
                                        className="w-full h-65 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                    />
                                </Link>

                                <div className="mt-6 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-xl font-medium">Dog Collars & Leads</h4>
                                        <span className="text-lg">£16.50*</span>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed">
                                        Click <Link href="/dog-collars-leads" className="underline hover:text-gray-900 transition-colors">here</Link> to see
                                        examples of our bespoke gaucho dog collars.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                    </div>

                    {/* Footer Note */}
                    <p className="text-center text-gray-500 mt-16">
                        *prices vary depending on the quantity of bespoke polo belts ordered
                    </p>

                </div>
            </section>
        </div>
    );
};

export default BespokeSection;