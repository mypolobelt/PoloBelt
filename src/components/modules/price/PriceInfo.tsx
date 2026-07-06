'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import PoloLogo2 from '../shared/PoloLogo2';

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
    hover: { scale: 1.01, transition: { duration: 0.3 } },
};

const PriceInfo = () => {
    return (
        <section className="w-full">
            <PoloLogo2 />
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                <h2 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center py-10">
                    Customer Information
                </h2>

                <div className="flex flex-col items-center gap-6 px-4 sm:px-6 lg:px-8 pb-12">
                    <motion.div whileHover="hover" variants={imageVariants} className="w-full max-w-2xl">
                        <Image
                            src="/assets/pdf1.png"
                            alt="Customer Information Page 1"
                            width={712}
                            height={1005}
                            className="w-full h-auto mx-auto bg-white rounded-lg shadow-lg"
                            priority
                        />
                    </motion.div>

                    <motion.div whileHover="hover" variants={imageVariants} className="w-full max-w-2xl">
                        <Image
                            src="/assets/pdf2.png"
                            alt="Customer Information Page 2"
                            width={712}
                            height={1050}
                            className="w-full h-auto mx-auto bg-white rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default PriceInfo;
