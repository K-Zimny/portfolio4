import style from "@/components/body/footer/contactbar/contactbar.module.css";
import Link from "next/link";
import Image from "next/image";

import contacts from "@/data/contacts.json";

export default function ContactBar() {
  return (
    <div data-test="contact-bar" className={style["contact-bar"]}>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.href}>
              <Link href={contact.href} aria-label="link">
                <Image
                  src={contact.src}
                  width={22.5}
                  height={22.5}
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
