import PageHeader from "@/components/pageheader/PageHeader";
import home from "@/data/home.js";
import style from "@/app/home.module.css";
import CTA from "@/components/cta/CTA";

const { name, position, intro, siteLinks } = home;

export default function Home() {
  return (
    <div>
      <PageHeader title={name} subtitle={position} />

      <p>{intro}</p>

      <ul id={style["site-links"]}>
        {siteLinks.map((link) => {
          return (
            <li className="!ml-0 !list-none" key={link.title}>
              <CTA href={link.href}>{link.title}</CTA>              
            </li>
          );
        })}
      </ul>
    </div>
  );
}
