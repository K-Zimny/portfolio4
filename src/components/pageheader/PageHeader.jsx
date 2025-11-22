import style from "@/components/pageheader/pageheader.module.css";
import Accent from "../theme/Accent";

export default function PageHeader({ title, subtitle, className }) {
  return (
    <header className={`${style.header} ${className}`}>
      <h1 className={style.title}>{title}</h1>
      {subtitle && <p className={style.subtitle}>{subtitle}</p>}
      <Accent dataType="desktop" />
    </header>
  );
}
