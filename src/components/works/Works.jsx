import Image from "next/image";
import style from "@/components/works/works.module.css";
import Link from "next/link";
import works from "@/data/works.json";

const Work = ({ title, href, src, alt, description }) => {
  return (
    <Link href={href} className={style.work}>
      <h2>{title}</h2>
      <Image src={src} alt={alt} width={100} height={100}></Image>
      <p>{description}</p>
    </Link>
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
