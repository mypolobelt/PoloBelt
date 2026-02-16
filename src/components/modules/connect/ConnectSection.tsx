import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function ConnectSection() {
    return (
        <section className="bg-[#17243c] py-10 md:py-20">
            <div className="max-w-4xl mx-auto text-center">

                {/* Title */}
                <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-wide mb-10">
                    CONNECT WITH US
                </h2>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-8">

                    {/* Facebook */}
                    <Link
                        href="https://www.facebook.com/mypolobelt"
                        target="blank"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center 
                       transition-all duration-300 hover:scale-110 hover:bg-gray-200"
                    >
                        <FaFacebook className="w-6 h-6 text-[#17243c]" />
                    </Link>

                    {/* Instagram */}
                    <Link
                        href="https://www.instagram.com/mypolobelt"
                        target="blank"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center 
                       transition-all duration-300 hover:scale-110 hover:bg-gray-200"
                    >
                        <FaInstagram className="w-6 h-6 text-[#17243c]" />
                    </Link>

                </div>
            </div>
        </section>
    )
}
