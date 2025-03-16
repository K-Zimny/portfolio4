import PageHeader from "@/components/pageheader/PageHeader";
import style from "@/components/works/work/work.module.css";
import Image from "next/image";
import Link from "next/link";

const fakework = {
  title: "My Fake Work",
  src: "/placeholder-image.jpg",
  alt: "My fake alt",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus aliquam ducimus eligendi explicabo! Aspernatur illo possimus magni minus perspiciatis ullam officiis consequuntur error. Quas blanditiis officia voluptas ipsa unde!",
  href: "/",
  repo: "/",
};

export default function Work() {
  return (
    <div id={style["work-container"]}>
      <div id={style.work}>
        <PageHeader title={fakework.title} />

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
      <div>
        <Link href="/works">Back to Works</Link>
      </div>
    </div>
  );
}
