"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
    const [sheetOpen, setSheetOpen] = useState(false);
    const [mobileOfferOpen, setMobileOfferOpen] = useState(false);

    const closeSheet = () => setSheetOpen(false);

    return (
        <div className="sticky top-0 z-10 flex bg-[#0f1526] px-2 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 font-medium">
            <div className=" flex items-center justify-between w-11/12 mx-auto">
                {/* Desktop Navigation */}
                <NavigationMenu viewport={false} className="hidden lg:hidden xl:flex flex-1">
                    <NavigationMenuList className="flex-wrap">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/" className="px-2 sm:px-3 py-2 text-sm sm:text-base text-white hover:text-white/80 transition-colors">
                                    Home
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        {/* <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/custom-design-tool"
                                    className="px-4 py-2 text-sm sm:text-base text-white font-semibold rounded-md border-b border-orange-600 transition-all duration-300  shadow-xl shadow-orange-600/20"
                                >
                                    Custom Design Tool
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem> */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="https://www.etsy.com/shop/MyPoloBelt" target="_blank" className="px-2 sm:px-3 py-2 text-sm sm:text-base text-white hover:text-white/80 transition-colors">
                                    In Stock Now
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/pricing" className="px-2 sm:px-3 py-2 text-sm sm:text-base text-white hover:text-white/80 transition-colors">
                                    Pricing
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/sizing" className="px-2 sm:px-3 py-2 text-sm sm:text-base text-white hover:text-white/80 transition-colors">
                                    Sizing
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-sm sm:text-base text-white">
                                Gallery
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="flex flex-col min-w-50 bg-[#0f1526] gap-1">
                                    <li>
                                        <Link
                                            href="/bespoke-polo-belts"
                                            className="block hover:bg-white/10 rounded-md px-4 py-2 text-white text-sm"
                                        >
                                            Bespoke Polo Belts
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/intricate-stamps"
                                            className="block hover:bg-white/10 rounded-md px-4 py-2 text-white text-sm"
                                        >
                                            Intricate Stamps
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/dog-collars-leads"
                                            className="block hover:bg-white/10 rounded-md px-4 py-2 text-white text-sm"
                                        >
                                            Dog Collars & Leads
                                        </Link>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/about" className="px-2 sm:px-3 py-2 text-sm sm:text-base text-white hover:text-white/80 transition-colors">
                                    About Us
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/contact" className="px-2 sm:px-3 py-2 text-sm sm:text-base text-white hover:text-white/80 transition-colors">
                                    Contact Us
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Desktop Right Side */}
                <div className="lg:hidden hidden xl:flex items-center gap-2 sm:gap-4">
                    <a href="mailto:sales@mypolobelt.com" className="text-white text-sm sm:text-base lg:text-lg hover:text-white/80 transition-colors truncate">
                        sales@mypolobelt.com
                    </a>
                    {/* <div className="h-5 w-[0.5px] bg-white" /> */}
                    {/* <NavigationMenu viewport={false}>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent p-0">
                                    <UserRound className="text-white" size={20} />
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="flex flex-col min-w-50 bg-[#0f1526] gap-1 p-2">
                                        <li>
                                            <Link
                                                href="/signin"
                                                className="block hover:bg-white/10 rounded-md px-4 py-2 text-white text-sm"
                                            >
                                                Sign In
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/signin"
                                                className="block hover:bg-white/10 rounded-md px-4 py-2 text-white text-sm"
                                            >
                                                My Account
                                            </Link>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu> */}
                </div>
                {/* Mobile Header */}
                <div className="lg:flex md:flex flex xl:hidden items-center justify-between w-full">
                    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                        <SheetTrigger asChild>
                            <button className="text-white p-1 sm:p-2 hover:bg-white/10 rounded-md transition-colors" aria-label="Toggle menu">
                                <Menu size={24} />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-[#0f1526] border-l border-white/10 w-[80%] sm:w-64">
                            <SheetHeader>
                                <SheetTitle className="text-white text-left text-lg sm:text-xl">Menu</SheetTitle>
                            </SheetHeader>
                            <nav className="mt-6 sm:mt-8">
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <Link
                                            href="/"
                                            className="block px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-white/10 rounded-md transition-colors"
                                            onClick={closeSheet}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link
                                            href="/custom-design-tool"
                                            className="px-2 py-2 text-sm sm:text-base text-white font-semibold rounded-md border-r border-orange-600 transition-all duration-300  shadow-xl shadow-orange-600/20"
                                            onClick={closeSheet}
                                        >
                                            Custom Design Tool
                                        </Link>
                                    </li>
                                    <li> */}
                                        <Link
                                            href="https://www.etsy.com/shop/MyPoloBelt" target="_blank"
                                            className="block px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-white/10 rounded-md transition-colors"
                                            onClick={closeSheet}
                                        >
                                            In Stock Now
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/pricing"
                                            className="block px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-white/10 rounded-md transition-colors"
                                            onClick={closeSheet}
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/sizing"
                                            className="block px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-white/10 rounded-md transition-colors"
                                            onClick={closeSheet}
                                        >
                                            Sizing
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setMobileOfferOpen(!mobileOfferOpen)}
                                            className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-white/10 rounded-md flex items-center justify-between transition-colors"
                                        >
                                            Gallery
                                            <span className={`transform transition-transform duration-200 text-xs ${mobileOfferOpen ? 'rotate-180' : ''}`}>
                                                ▼
                                            </span>
                                        </button>
                                        {mobileOfferOpen && (
                                            <ul className="ml-3 sm:ml-4 mt-2 flex flex-col gap-1">
                                                <li>
                                                    <Link
                                                        href="/bespoke-polo-belts"
                                                        className="block px-3 sm:px-4 py-2 text-xs sm:text-sm text-white hover:bg-white/10 rounded-md transition-colors"
                                                        onClick={closeSheet}
                                                    >
                                                        Bespoke Polo Belts
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/intricate-stamps"
                                                        className="block px-3 sm:px-4 py-2 text-xs sm:text-sm text-white hover:bg-white/10 rounded-md transition-colors"
                                                        onClick={closeSheet}
                                                    >
                                                        Intricate Stamps
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/dog-collars-leads"
                                                        className="block px-3 sm:px-4 py-2 text-xs sm:text-sm text-white hover:bg-white/10 rounded-md transition-colors"
                                                        onClick={closeSheet}
                                                    >
                                                        Dog Collars & Leads
                                                    </Link>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    <li>
                                        <Link
                                            href="/about"
                                            className="block px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-white/10 rounded-md transition-colors"
                                            onClick={closeSheet}
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact"
                                            className="block px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-white/10 rounded-md transition-colors"
                                            onClick={closeSheet}
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                    {/* <li className="border-t border-white/10 mt-4 pt-4">
                                        <Link
                                            href="/signin"
                                            className="block px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-white/10 rounded-md transition-colors"
                                            onClick={closeSheet}
                                        >
                                            Sign In
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/signin"
                                            className="block px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-white/10 rounded-md transition-colors"
                                            onClick={closeSheet}
                                        >
                                            My Account
                                        </Link>
                                    </li> */}
                                </ul>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <a href="mailto:sales@mypolobelt.com" className="text-white text-md hover:text-white/80 transition-colors truncate">
                        sales@mypolobelt.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Nav;