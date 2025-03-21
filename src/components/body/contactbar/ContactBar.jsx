import style from "@/components/body/contactbar/contactbar.module.css";
import Link from "next/link";
import Image from "next/image";

const contacts = [
  {
    href: "https://github.com/K-Zimny",
    src: "/placeholder-image.jpg",
    alt: "Placeholder Image",
  },
  {
    href: "https://www.linkedin.com/in/kenneth-zimny/",
    src: "/placeholder-image.jpg",
    alt: "Placeholder Image",
  },
  {
    href: "mailto:kenneth.zimny@gmail.com",
    src: "/placeholder-image.jpg",
    alt: "Placeholder Image",
  },
  {
    href: "tel:6302546683",
    src: "/placeholder-image.jpg",
    alt: "Placeholder Image",
  },
];

export default function ContactBar() {
  return (
    <div className={style["contact-bar"]}>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.href}>
              <Link href={contact.href} aria-label="link">
                <Image
                  src={contact.src}
                  width={20}
                  height={20}
                  alt={contact.alt}
                  aria-label="link"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
