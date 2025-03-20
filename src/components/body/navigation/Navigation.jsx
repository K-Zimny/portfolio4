"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathName = usePathname();

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
          {siteLinks.map((link) => {
            return (
              <li key={link.title}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
