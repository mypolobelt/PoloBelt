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
import { UserRound, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
    const [sheetOpen, setSheetOpen] = useState(false);
    const [mobileOfferOpen, setMobileOfferOpen] = useState(false);

    const closeSheet = () => setSheetOpen(false);

    return (
        <div className="flex bg-[#0f1526] p-5 font-medium z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Desktop Navigation */}
                <NavigationMenu viewport={false} className="hidden lg:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/" className="px-3 py-2 text-white hover:text-white/80 transition-colors">
                                    Home
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/about" className="px-3 py-2 text-white hover:text-white/80 transition-colors">
                                    About Us
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-white">
                                What We Offer
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
                                <Link href="/ordering-process" className="px-3 py-2 text-white hover:text-white/80 transition-colors">
                                    Ordering Process
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/sizing" className="px-3 py-2 text-white hover:text-white/80 transition-colors">
                                    Sizing
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/contact" className="px-3 py-2 text-white hover:text-white/80 transition-colors">
                                    Contact Us
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Desktop Right Side */}
                <div className="hidden lg:flex items-center gap-4">
                    <a href="mailto:sales@mypolobelt.com" className="text-white text-lg xl:text-xl hover:text-white/80 transition-colors">
                        sales@mypolobelt.com
                    </a>
                    <div className="h-5 w-[0.5px] bg-white" />
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent p-0">
                                    <UserRound className="text-white" />
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
                    </NavigationMenu>
                </div>

                {/* Mobile Header */}
                <div className="flex flex-row-reverse lg:hidden items-center justify-between w-full">
                    <a href="mailto:sales@mypolobelt.com" className="text-white text-lg xl:text-xl hover:text-white/80 transition-colors">
                        sales@mypolobelt.com
                    </a>
                    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                        <SheetTrigger asChild>
                            <button className="text-white p-2" aria-label="Toggle menu">
                                <Menu size={24} />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-[#0f1526] border-l w-full border-white/10">
                            <SheetHeader>
                                <SheetTitle className="text-white text-left">Menu</SheetTitle>
                            </SheetHeader>
                            <nav className="mt-8">
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <Link
                                            href="/"
                                            className="block px-4 py-3 text-white hover:bg-white/10 rounded-md transition-colors"
                                            onClick={closeSheet}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/about"
                                            className="block px-4 py-3 text-white hover:bg-white/10 rounded-md transition-colors"
                                            onClick={closeSheet}
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setMobileOfferOpen(!mobileOfferOpen)}
                                            className="w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-md flex items-center justify-between transition-colors"
                                        >
                                            What We Offer
                                            <span className={`transform transition-transform duration-200 ${mobileOfferOpen ? 'rotate-180' : ''}`}>
                                                ▼
                                            </span>
                                        </button>
                                        {mobileOfferOpen && (
                                            <ul className="ml-4 mt-2 flex flex-col gap-1">
                                                <li>
                                                    <Link
                                                        href="/bespoke-polo-belts"
                                                        className="block px-4 py-2 text-white text-sm hover:bg-white/10 rounded-md transition-colors"
                                                        onClick={closeSheet}
                                                    >
                                                        Bespoke Polo Belts
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/intricate-stamps"
                                                        className="block px-4 py-2 text-white text-sm hover:bg-white/10 rounded-md transition-colors"
                                                        onClick={closeSheet}
                                                    >
                                                        Intricate Stamps
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/dog-collars-leads"
                                                        className="block px-4 py-2 text-white text-sm hover:bg-white/10 rounded-md transition-colors"
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
                                            href="/ordering-process"
                                            className="block px-4 py-3 text-white hover:bg-white/10 rounded-md transition-colors"
                                            onClick={closeSheet}
                                        >
                                            Ordering Process
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/sizing"
                                            className="block px-4 py-3 text-white hover:bg-white/10 rounded-md transition-colors"
                                            onClick={closeSheet}
                                        >
                                            Sizing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact"
                                            className="block px-4 py-3 text-white hover:bg-white/10 rounded-md transition-colors"
                                            onClick={closeSheet}
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li className="border-t border-white/10 mt-4 pt-4">
                                        <Link
                                            href="/signin"
                                            className="block px-4 py-3 text-white hover:bg-white/10 rounded-md transition-colors"
                                            onClick={closeSheet}
                                        >
                                            Sign In
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/signin"
                                            className="block px-4 py-3 text-white hover:bg-white/10 rounded-md transition-colors"
                                            onClick={closeSheet}
                                        >
                                            My Account
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
};

export default Nav;