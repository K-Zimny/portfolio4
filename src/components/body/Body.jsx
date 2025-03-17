import style from "@/components/body/body.module.css";

import Navigation from "./navigation/Navigation";
import Banner from "./banner/Banner";

export default function Body({ children }) {
  return (
    <div id={style["body-container"]}>
      <div id={style["banner-nav-container"]}>
        <Banner />
        <Navigation />
      </div>
      <main>{children}</main>
    </div>
  );
}
