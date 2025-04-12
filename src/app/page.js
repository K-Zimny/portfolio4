import Link from "next/link";
import PageHeader from "@/components/pageheader/PageHeader";
import home from "@/data/home.json";
import style from "@/app/home.module.css";

const { name, position, intro, siteLinks } = home;

export default function Home() {
  return (
    <div>
      <PageHeader title={name} subtitle={position} />

      <p>{intro}</p>

      <ul id={style["site-links"]}>
        {siteLinks.map((link) => {
          return (
            <li key={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
