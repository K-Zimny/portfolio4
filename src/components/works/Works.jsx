import Image from "next/image";
import style from "@/components/works/works.module.css";
import Link from "next/link";
import works from "@/data/works.js";

const Work = ({ title, href, src, alt, description }) => {
  return (
    <a href={href} target="_blank" className={style.work}>
      <Image src={src} alt={alt} width={1920} height={1080}></Image>
      <h2>{title}</h2>
      <p className={style.description}>{description}</p>
    </a>
  );
};

export default function Works() {
  return (
    <div id={style.works}>
      <section id={style["works-grid"]}>
        {works.map((work) => {
          return (
            <Work
              key={work.title}
              title={work.title}
              href={work.href}
              src={work.src}
              alt={work.alt}
              description={work.description}
            ></Work>
          );
        })}
      </section>
    </div>
  );
}
