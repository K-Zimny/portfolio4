import style from "@/components/body/body.module.css";

import Navigation from "./navigation/Navigation";
import Banner from "./banner/Banner";
import Accent from "../theme/Accent";

export default function Body({ children }) {
  return (
    <div id={style["body-container"]}>
      <div id={style["banner-nav-container"]}>
        <Banner />
        <Navigation />
      </div>
      <Accent dataType="mobile" />
      <main>{children}</main>
    </div>
  );
}
