"use client";

import PageHeader from "@/components/pageheader/PageHeader";
import style from "@/components/works/work/work.module.css";
import Image from "next/image";
import Link from "next/link";
import works from "@/data/works.json";
import { usePathname } from "next/navigation";
import CTA from "@/components/cta/CTA";

export default function Work() {
  const pathName = usePathname(); // Path of current page

  const work = works.find((work) => {
    if (work.route == pathName) {
      return work;
    }
  });

  return (
    <div id={style["work-container"]}>
      <div id={style.work}>
        <PageHeader title={work.title} />

        <Image src={work.src} alt={work.alt} width={1920} height={1080}></Image>
        <ul>
          <li className="!ml-0 !list-none">
            <CTA href={work.href}>View the Project</CTA>
          </li>
          <li className="!ml-0 !list-none">
            <CTA href={work.repo}>Read the Code</CTA>
          </li>
        </ul>

        <p>{work.description}</p>
      </div>
      <div>
        <Link href="/works">Back to Works</Link>
      </div>
    </div>
  );
}
