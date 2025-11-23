import style from "@/components/theme/accent.module.css";

export default function Accent({ dataType }) {
  return <div data-type={dataType} className={`${style.accent}`}></div>;
}
