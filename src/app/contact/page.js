import Link from "next/link";
import PageHeader from "@/components/pageheader/PageHeader";
import contacts from "@/data/contacts.json";

export default function contact() {
  return (
    <div>
      <PageHeader title="Contact" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        similique iusto sed explicabo odio, id dolorum officiis ea impedit omnis
        aliquam nostrum modi excepturi minima facilis laudantium eligendi.
        Voluptatem, quibusdam.
      </p>

      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.name}>
              <Link href={contact.href}>{contact.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
