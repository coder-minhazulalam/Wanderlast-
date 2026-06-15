"use client";

import { Button } from "@heroui/react";
import { useState } from "react";
import { NavLink } from "./Navlink";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bh w-full border-separator rounded-md bg-background/70 backdrop-blur-lg px-3 py-4 ">
      <header className="flex h-16 items-center justify-between px-6 ">
        <div className="flex w-full justify-between items-center gap-4">
          <Button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
          <div className="hidden md:block ">
            <ul className="hidden items-center gap-4 md:flex">
              <li>
                <NavLink href="/" >Home</NavLink>
              </li>
              <li>
                <NavLink href="/destination">Destination</NavLink>
              </li>
              
               <li>
                <NavLink href="/mybookings">My Bookings</NavLink>
              </li>
              <li>
                <NavLink href="/addDestination">Add-Destination</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src={"/assets/Wanderlast.png"}
              alt="logo"
              height={200}
              width={130}
            
             />
          </div>
          <div></div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <NavLink href="/login">LogIn</NavLink>
          </li>
          <li>
            <NavLink href="/signup">SignUp</NavLink>
          </li>
        </ul>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
             <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/destination">Destination</NavLink>
              </li>
              
               <li>
                <NavLink href="/mybookings">My Bookings</NavLink>
              </li>
              <li>
                 <NavLink href="/addDestination">Add-Destination</NavLink>
              </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
