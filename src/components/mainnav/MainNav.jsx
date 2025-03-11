import style from "@/components/mainnav/mainnav.module.css";
import Navigation from "../navigation/Navigation";

export default function MainNav({ children }) {
  return (
    <div id={style["main-nav-container"]}>
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
