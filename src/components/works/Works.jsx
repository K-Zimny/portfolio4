import Image from "next/image";
import style from "@/components/works/works.module.css";

const fakeWorks = [
  {
    title: "My Fake Title",
    src: "/placeholder-image.jpg",

    alt: "Fake Alt",
    description: "My Fake Description",
  },
  {
    title: "My Fake Title 1",
    src: "/placeholder-image.jpg",

    alt: "Fake Alt",
    description: "My Fake Description",
  },
  {
    title: "My Fake Title 2",
    src: "/placeholder-image.jpg",

    alt: "Fake Alt",
    description: "My Fake Description",
  },
  {
    title: "My Fake Title 3",
    src: "/placeholder-image.jpg",

    alt: "Fake Alt",
    description: "My Fake Description",
  },
  {
    title: "My Fake Title 4",
    src: "/placeholder-image.jpg",

    alt: "Fake Alt",
    description: "My Fake Description",
  },
  {
    title: "My Fake Title 5",
    src: "/placeholder-image.jpg",

    alt: "Fake Alt",
    description: "My Fake Description",
  },
  {
    title: "My Fake Title 6",
    src: "/placeholder-image.jpg",

    alt: "Fake Alt",
    description: "My Fake Description",
  },
];

const Work = ({ title, src, alt, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Image src={src} alt={alt} width={100} height={100}></Image>
      <p>{description}</p>
    </div>
  );
};

export default function Works() {
  return (
    <div id={style.works}>
      {fakeWorks.map((work) => {
        return (
          <Work
            key={work.title}
            title={work.title}
            src={work.src}
            alt={work.alt}
            description={work.description}
          ></Work>
        );
      })}
    </div>
  );
}
