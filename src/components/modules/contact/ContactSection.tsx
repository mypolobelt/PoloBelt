import { Button } from '@/components/ui/button';
import Image from 'next/image';
import PoloLogo2 from '../shared/PoloLogo2';

const ContactSection = () => {
    return (
        <section>
            {/* logo */}
            <PoloLogo2 />
            <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-7/12 mx-auto px-4 sm:px-6 my-6">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center my-6 sm:my-8 md:my-10 tracking-wide">
                    CONTACT US
                </h2>

                {/* Content Grid */}
                <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 md:gap-6 lg:gap-8 p-4 sm:p-5">

                    {/* Left Side */}
                    <div className="flex flex-col gap-4 sm:gap-6 w-full md:w-1/2">
                        <h3 className="text-xl sm:text-2xl font-semibold">
                            Design the perfect belt
                        </h3>

                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            Please get in touch if you would like further information about
                            designing your bespoke belt. We would be more than happy to
                            discuss designs, colours and prices.
                        </p>

                        <div className="pt-4 sm:pt-6 space-y-2">
                            <h4 className="text-lg sm:text-xl font-medium">My Polo Belt</h4>
                            <p className="text-sm sm:text-base text-gray-600">Wiltshire, UK</p>
                            <p className="text-sm sm:text-base text-gray-600">sales@mypolobelt.com</p>
                        </div>

                        <Button className="mt-4 sm:mt-6 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                            Get in Touch
                        </Button>
                    </div>

                    {/* Right Side Image */}
                    <div className="relative w-full md:w-1/2">
                        <Image
                            src="/assets/Horse_Belt.webp"
                            alt="Polo Belt"
                            className="object-cover w-full h-auto"
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