"use client"
import Link from "next/link";
import NavLink from "./NavLink";
import HamburgerButton from "./HamburgerButton";
import { useState } from "react";

export default function Header() {
  const [hiddenNavIsOpen, setHiddenNavIsOpen] = useState(false);
  return (
    <header className="bg-gradient-to-r from-custom-olive-green via-custom-light-olive-green to-custom-lime-green h-fit rounded-xl p-5 my-5 sticky top-5 z-[1000] shadow-lg ">
      <ul className="text-center flex items-center justify-between md:justify-center gap-10">
        <li className="hidden md:block">
          <NavLink href={"/"} className="text-white text-md font-thin">
            Beranda
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink href={"/produk"} className="text-white text-md font-thin">
            Produk
          </NavLink>
        </li>
        <li className="">
          <Link
            href={"/"}
            className="text-white text-xl sm:text-2xl md:text-3xl font-Grenze-Gotisch"
          >
            UMKM Desa Kare
          </Link>
        </li>
        <li className="hidden md:block">
          <NavLink href={"/tentang"} className="text-white text-md font-thin">
            Tentang
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink href={"/umkm"} className="text-white text-md font-thin">
            UMKM
          </NavLink>
        </li>
        <li>
          <HamburgerButton
            isOpen={hiddenNavIsOpen}
            onClick={() => {
              setHiddenNavIsOpen((isOpen) => !isOpen);
            }}
          />
        </li>
      </ul>
    </header>
  );
}
