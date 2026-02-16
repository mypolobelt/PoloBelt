import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { SiGodaddy } from "react-icons/si"

export default function Footer() {
    return (
        <footer className="bg-[#161616] text-gray-300">
            <div className="container flex flex-col items-center justify-center mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">

                {/* Copyright */}
                <p className="text-sm sm:text-base text-[#a9a9a9] mb-4 sm:mb-6 text-center">
                    Copyright @{new Date().getFullYear()} MyPoloBelt - All Rights Reserved.
                </p>

                {/* Links */}
                <div className="flex flex-col items-center md:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-sm mb-6 sm:mb-8 md:mb-10">
                    <Link
                        href="/about"
                        className="hover:text-white transition-colors"
                    >
                        About Us
                    </Link>

                    <Link
                        href="/contact"
                        className="hover:text-white transition-colors"
                    >
                        Contact Us
                    </Link>

                    <Link
                        href="/privacy-policy"
                        className="hover:text-white transition-colors"
                    >
                        Privacy Policy
                    </Link>
                </div>

                {/* Small Divider */}
                <div className="w-12 sm:w-16 mb-4 sm:mb-6">
                    <Separator className="bg-gray-700" />
                </div>

                {/* Powered By */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-lg sm:text-xl text-gray-400">Powered by</span>

                    <Link
                        href="https://www.godaddy.com/airo"
                        target="_blank"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <span className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                            <SiGodaddy /> GoDaddy Airo
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}