import { Home, Inbox, LogIn, LogOut, Menu } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import React, { useState } from "react";

export function AppNavbar({ isAuthenticated, onLogout }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Define menu items inside the component
    const items = [
        {
            title: "Home",
            url: "/",
            icon: Home,
        },
        isAuthenticated
            ? { title: "Login", url: "/login", icon: LogIn }
            : { title: "Logout", url: "/login", icon: LogOut, onClick: onLogout }
    ];

    return (
        <nav className="bg-pink-50">
            {/* Navigation Bar */}
            <NavigationMenu className="flex items-center justify-between px-6 py-4 max-w-full">

                {/* Logo */}
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <img src="/img/Octoverse Gateway logo-01.png" alt="Octoverse Gateway Logo" className="h-10 md:w-auto w-20" />
                    </NavigationMenuItem>
                </NavigationMenuList>

                {/* Trial message (Hidden on mobile) */}
                <NavigationMenuList className="md:flex justify-center flex-grow">
                    <NavigationMenuItem>
                        <p className="md:text-sm text-xs text-center">
                            Your free trial account will end in <strong>14 days</strong>.{" "}
                            
                        </p>
                    </NavigationMenuItem>
                </NavigationMenuList>

                {/* Desktop Navigation */}
                <NavigationMenuList className="hidden md:flex justify-end gap-4">
                    {items.map((item) => (
                        <NavigationMenuItem key={item.title}>
                            <NavigationMenuLink
                                href={item.url}
                                className="flex items-center gap-2"
                                onClick={item.onClick || undefined}
                            >
                                <item.icon size={18} />
                                {item.title}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>

                {/* Mobile Menu Button */}
                <button className="md:hidden ml-0" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <Menu size={24} />
                </button>
            </NavigationMenu>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <NavigationMenu className="md:hidden bg-pink-100 py-4 max-w-full">
                    <NavigationMenuList className="flex flex-col space-y-2 px-4">
                        {items.map((item) => (
                            <NavigationMenuItem key={item.title}>
                                <NavigationMenuLink href={item.url} className="flex items-center gap-2 w-20">
                                    <item.icon size={18} className="sm:w-5"/>
                                    {item.title}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                    
                </NavigationMenu>
            )}
        </nav>
    );
}
