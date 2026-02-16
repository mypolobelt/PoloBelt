import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { UserRound } from "lucide-react";
import Link from "next/link";

const Nav = () => {
    return (
        <div className="flex bg-[#0f1526] p-5 font-medium z-50">
            <div className="container mx-auto flex items-center justify-evenly">
                <NavigationMenu viewport={false}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/about">About Us</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>What We Offer</NavigationMenuTrigger>
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
                                <Link href="/ordering-process">Ordering Process</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/sizing">Sizing</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/contact">Contact Us</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-4">
                    <h2 className="text-white text-xl">sales@mypolobelt.com</h2>
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
                                                href="/login"
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
            </div>
        </div>
    );
};

export default Nav;