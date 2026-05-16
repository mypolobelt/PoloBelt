import Image from 'next/image';
import { motion } from 'framer-motion';

const PoloLogo2 = () => {
    const headerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
            },
        },
    };
    return (
        <div className='bg-[#0f1526] p-5'>
            <motion.div
                className="flex items-center justify-center"
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
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
                    <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl   tracking-wide text-gray-800"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        My Polo Belt
                    </motion.h1>

                </div>
            </motion.div>
        </div>
    );
};

export default PoloLogo2;