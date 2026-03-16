'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Download } from 'lucide-react';
import { useState } from 'react';
import PoloLogo2 from '../shared/PoloLogo2';

const PriceInfo = () => {
    const [currentPage, setCurrentPage] = useState(0);

    // Array of PDF page images
    const pdfPages = [
        {
            src: '/assets/pdf1.png',
            alt: 'Customer Information Page 1',
            width: 712,
            height: 1005,
        },
        {
            src: '/assets/pdf2.png',
            alt: 'Customer Information Page 2',
            width: 712,
            height: 1050,
        },
    ];

    const handlePdfDownload = () => {
        const link = document.createElement('a');
        link.href = '/assets/MPBInformationSheet.pdf';
        link.download = 'MPBInformationSheet.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleNextPage = () => {
        if (currentPage < pdfPages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    const imageVariants = {
        enter: { opacity: 0, y: 20 },
        center: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
        exit: { opacity: 0, y: -20 },
    };

    const imageHoverVariants = {
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <section className="w-full">
            <PoloLogo2 />
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                {/* Customer Information Header */}
                <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center py-5">
                        Customer information
                    </h2>
                    <button
                        onClick={handlePdfDownload}
                        className="text-lg sm:text-xl flex items-center justify-center gap-2 mx-auto py-6 cursor-pointer hover:text-blue-600 transition-colors duration-200 font-medium"
                    >
                        Download PDF <Download size={24} />
                    </button>
                </div>

                {/* PDF Page Display with Pagination */}
                <div className="flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8">
                    {/* Image Container */}
                    <div className="w-full max-w-2xl relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPage}
                                variants={imageVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                whileHover="hover"
                                className="w-full"
                            >
                                <motion.div
                                    whileHover="hover"
                                    variants={imageHoverVariants}
                                    className="w-full"
                                >
                                    <Image
                                        src={pdfPages[currentPage].src}
                                        alt={pdfPages[currentPage].alt}
                                        className="w-full h-auto mx-auto p-5 bg-white rounded-lg shadow-lg"
                                        width={pdfPages[currentPage].width}
                                        height={pdfPages[currentPage].height}
                                        priority
                                    />
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex items-center justify-center gap-6 pb-8 w-full">
                        {/* Previous Button */}
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 0}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${currentPage === 0
                                ? 'opacity-40 cursor-not-allowed'
                                : 'hover:bg-gray-100 active:scale-95 cursor-pointer'
                                }`}
                        >
                            <ChevronLeft size={20} />
                            Previous
                        </button>

                        {/* Page Indicator */}
                        <div className="text-center">
                            <span className="text-lg font-semibold">
                                {currentPage + 1} / {pdfPages.length}
                            </span>
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === pdfPages.length - 1}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${currentPage === pdfPages.length - 1
                                ? 'opacity-40 cursor-not-allowed'
                                : 'hover:bg-gray-100 active:scale-95 cursor-pointer'
                                }`}
                        >
                            Next
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Page Dots Indicator */}
                    <div className="flex gap-2 mb-4">
                        {pdfPages.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${index === currentPage
                                    ? 'bg-gray-800 w-8'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.95 }}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default PriceInfo;