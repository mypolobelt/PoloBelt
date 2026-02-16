import { Button } from '@/components/ui/button';
import Image from 'next/image';

const ContactSection = () => {
    return (
        <section>
            {/* logo */}
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
            <div className="w-7/12 mx-auto px-6 my-6">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-semibold text-center my-10 tracking-wide">
                    CONTACT US
                </h2>

                {/* Content Grid */}
                <div className="flex justify-evenly items-center p-5">

                    {/* Left Side */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-semibold">
                            Design the perfect belt
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            Please get in touch if you would like further information about
                            designing your bespoke belt. We would be more than happy to
                            discuss designs, colours and prices.
                        </p>

                        <div className="pt-6 space-y-2">
                            <h4 className="text-xl font-medium">My Polo Belt</h4>
                            <p className="text-gray-600">Wiltshire, UK</p>
                            <p className="text-gray-600">sales@mypolobelt.com</p>
                        </div>

                        <Button className="mt-6 w-1/3">
                            Get in Touch
                        </Button>
                    </div>

                    {/* Right Side Image */}
                    <div className="relative w-full">
                        <Image
                            src="/assets/Horse_Belt.webp" // put your image inside public folder
                            alt="Polo Belt"
                            className="object-cover"
                            width={600}
                            height={400}

                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;