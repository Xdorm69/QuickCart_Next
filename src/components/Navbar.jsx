import {  Search, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b border-b-gray-300 py-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="">
            <Link href="/">
              <h1 className="text-2xl font-semibold">
                <span className="text-orange-400">Q</span>uickCart
              </h1>
            </Link>
          </div>
          <div className="">
            <ul className="flex items-center gap-4">
              <li>
                <Link
                  className="opacity-50 hover:opacity-100 transition"
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="opacity-50 hover:opacity-100 transition"
                  href={"/shop"}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className="opacity-50 hover:opacity-100 transition"
                  href={"/"}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="opacity-50 hover:opacity-100 transition"
                  href={"/"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="flex items-center gap-4">
              <Search size={18} className="cursor-pointer" />
              <Link
                href={"/login"}
                className="flex items-center gap-1 cursor-pointer"
              >
                <User size={18} />
                <div>Account</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );    
};

export default Navbar;
