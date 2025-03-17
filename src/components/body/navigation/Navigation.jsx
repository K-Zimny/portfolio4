"use client";

import { useState } from "react";
import style from "@/components/body/navigation/navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  function handleNavOpen() {
    setNavIsOpen((prev) => !prev);
  }

  return (
    <>
      <button className={style["nav-toggle"]} onClick={handleNavOpen}>
        {navIsOpen ? "X" : "="}
      </button>
      <nav
        id={style.nav}
        className={navIsOpen ? style["nav-open"] : style["nav-closed"]}
      >
        <ul>
          <li>
            <Link href="/works">Works</Link>
            <ul>
              <li>
                <Link href="/works/work">Work</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
