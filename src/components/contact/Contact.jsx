import style from "@/components/contact/contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <div id={style.contact}>
      <header>
        <h1>Contact</h1>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        similique iusto sed explicabo odio, id dolorum officiis ea impedit omnis
        aliquam nostrum modi excepturi minima facilis laudantium eligendi.
        Voluptatem, quibusdam.
      </p>

      <ul>
        <li>
          <Link href="https://github.com/K-Zimny">GitHub</Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/kenneth-zimny/">
            Linkedin
          </Link>
        </li>
        <li>
          <Link href="mailto:kenneth.zimny@gmail.com">
            Kenneth.zimny@gmail.com
          </Link>
        </li>
        <li>
          <Link href="tel:6302546683">(630) 254-6683</Link>
        </li>
      </ul>
    </div>
  );
}
