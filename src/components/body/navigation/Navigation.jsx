"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import style from "@/components/body/navigation/navigation.module.css";
import Link from "next/link";
import links from "@/data/nav.json";

export default function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const pathName = usePathname(); // Path of current page
  const basePathName = pathName.match(/^\/[^/]+/); // Only first part of path

  useEffect(() => {
    setNavIsOpen(false);
  }, [pathName]);

  function handleNavToggle() {
    setNavIsOpen((prev) => !prev);
  }

  return (
    <>
      <button
        className={`${style["nav-toggle"]} ${
          style[navIsOpen ? "nav-open" : "nav-closed"]
        }`}
        onClick={handleNavToggle}
      >
        {navIsOpen ? "X" : "="}
      </button>
      <nav
        id={style.nav}
        className={navIsOpen ? style["nav-open"] : style["nav-closed"]}
      >
        <ul>
          {links.map((link) => {
            return (
              <li key={link.title}>
                <Link
                  className={link.href == basePathName ? style.active : ""}
                  href={link.href}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
