import style from "@/components/pageheader/pageheader.module.css";

export default function PageHeader({ title, subtitle, className }) {
  return (
    <header
      data-component="PageHeader"
      className={`${style.header} ${className}`}
    >
      <h1 className={style.title}>{title}</h1>
      {subtitle && <p className={style.subtitle}>{subtitle}</p>}
    </header>
  );
}
