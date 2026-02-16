import Image from "next/image"
import PoloLogo from "../shared/PoloLogo"

export default function Banner() {
    return (
        <section className="relative w-full h-100 md:h-125 lg:h-150 overflow-hidden z-10">

            {/* Background Image */}
            <Image
                src="/assets/belt.webp"
                alt="Polo Belts Banner"
                fill
                priority
                className="object-cover"
            />
            <PoloLogo/>
        </section>
    )
}
