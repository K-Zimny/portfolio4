import style from "@/components/works/work/work.module.css";
import Image from "next/image";
import Link from "next/link";

const fakework = {
  title: "My Fake Work",
  src: "/placeholder-image.jpg",
  alt: "My fake alt",
  description: "My fake description",
  href: "/",
  repo: "/",
};

export default function Work() {
  return (
    <div id={style.work}>
      <h1>{fakework.title}</h1>
      <Image
        src={fakework.src}
        alt={fakework.alt}
        width={100}
        height={100}
      ></Image>
      <ul>
        <li>
          <Link href={fakework.href}>View the Project</Link>
        </li>
        <li>
          <Link href={fakework.repo}>Read the Code</Link>
        </li>
      </ul>

      <p>{fakework.description}</p>
    </div>
  );
}
