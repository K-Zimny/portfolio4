"use client";

import { useState } from "react";
import style from "@/components/body/navigation/navigation.module.css";
import Link from "next/link";

const siteLinks = [
  {
    title: "Works",
    href: "/works",
  },
  {
    title: "Skills",
    href: "/skills",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Resume",
    href: "/resume",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  function handleNavToggle() {
    setNavIsOpen((prev) => !prev);
  }

  return (
    <>
      <button className={style["nav-toggle"]} onClick={handleNavToggle}>
        {navIsOpen ? "X" : "="}
      </button>
      <nav
        id={style.nav}
        className={navIsOpen ? style["nav-open"] : style["nav-closed"]}
      >
        <ul>
          {siteLinks.map((link) => {
            return (
              <li key={link.title}>
                <Link onClick={handleNavToggle} href={link.href}>
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
