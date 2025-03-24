import style from "@/components/body/banner/banner.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <header id={style.banner}>
      <Link href="/" aria-label="Kenneth Zimny Home Page">
        <Image
          src="/kz-logo.svg"
          alt="Kenneth Zimny Site Logo"
          fill
          priority
        ></Image>
      </Link>
    </header>
  );
}
