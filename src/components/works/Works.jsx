import Image from "next/image";
import style from "@/components/works/works.module.css";
import Link from "next/link";
import PageHeader from "../pageheader/PageHeader";

const fakeWorks = [
  {
    title: "My Fake Title",
    href: "/works/work",
    src: "/placeholder-image.jpg",
    alt: "Fake Alt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus aliquam ducimus eligendi explicabo! Aspernatur illo possimus magni minus perspiciatis ullam officiis consequuntur error. Quas blanditiis officia voluptas ipsa unde!",
  },
  {
    title: "My Fake Title 1",
    href: "/works/work",
    src: "/placeholder-image.jpg",
    alt: "Fake Alt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus aliquam ducimus eligendi explicabo! Aspernatur illo possimus magni minus perspiciatis ullam officiis consequuntur error. Quas blanditiis officia voluptas ipsa unde!",
  },
  {
    title: "My Fake Title 2",
    href: "/works/work",
    src: "/placeholder-image.jpg",
    alt: "Fake Alt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus aliquam ducimus eligendi explicabo! Aspernatur illo possimus magni minus perspiciatis ullam officiis consequuntur error. Quas blanditiis officia voluptas ipsa unde!",
  },
  {
    title: "My Fake Title 3",
    href: "/works/work",
    src: "/placeholder-image.jpg",
    alt: "Fake Alt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus aliquam ducimus eligendi explicabo! Aspernatur illo possimus magni minus perspiciatis ullam officiis consequuntur error. Quas blanditiis officia voluptas ipsa unde!",
  },
  {
    title: "My Fake Title 4",
    href: "/works/work",
    src: "/placeholder-image.jpg",
    alt: "Fake Alt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus aliquam ducimus eligendi explicabo! Aspernatur illo possimus magni minus perspiciatis ullam officiis consequuntur error. Quas blanditiis officia voluptas ipsa unde!",
  },
  {
    title: "My Fake Title 5",
    href: "/works/work",
    src: "/placeholder-image.jpg",
    alt: "Fake Alt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus aliquam ducimus eligendi explicabo! Aspernatur illo possimus magni minus perspiciatis ullam officiis consequuntur error. Quas blanditiis officia voluptas ipsa unde!",
  },
  {
    title: "My Fake Title 6",
    href: "/works/work",
    src: "/placeholder-image.jpg",
    alt: "Fake Alt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus aliquam ducimus eligendi explicabo! Aspernatur illo possimus magni minus perspiciatis ullam officiis consequuntur error. Quas blanditiis officia voluptas ipsa unde!",
  },
];

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
        {fakeWorks.map((work) => {
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
