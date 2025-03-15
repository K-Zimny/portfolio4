import style from "@/components/mainnav/mainnav.module.css";
import Link from "next/link";
import Image from "next/image";

import Navigation from "../navigation/Navigation";
import Banner from "../banner/Banner";

export default function MainNav({ children }) {
  return (
    <div id={style["main-nav-container"]}>
      <div id={style["banner-nav-container"]}>
        <Banner />
        <Navigation />
      </div>
      <main>{children}</main>
    </div>
  );
}
