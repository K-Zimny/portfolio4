import style from "@/components/footer/contactbar/contactbar.module.css";
import Link from "next/link";
import Image from "next/image";

const contacts = [
  {
    href: "https://github.com/K-Zimny",
    src: "/github.svg",
    alt: "Placeholder Image",
  },
  {
    href: "https://www.linkedin.com/in/kenneth-zimny/",
    src: "/linkedin.svg",
    alt: "Placeholder Image",
  },
  {
    href: "mailto:kenneth.zimny@gmail.com",
    src: "/email.svg",
    alt: "Placeholder Image",
  },
  {
    href: "tel:6302546683",
    src: "/phone.svg",
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
                  width={25}
                  height={25}
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
