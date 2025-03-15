import style from "@/components/banner/banner.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <header id={style.banner}>
      <Link href="/" aria-label="Kenneth Zimny Home Page">
        <Image
          src="/placeholder-image.jpg"
          alt="Placeholder Image"
          width={100}
          height={50}
        ></Image>
      </Link>
    </header>
  );
}
