import Link from "next/link";
import PageHeader from "@/components/pageheader/PageHeader";
import contacts from "@/data/contacts.json";
import CTA from "@/components/cta/CTA";

export default function contact() {
  return (
    <div>
      <PageHeader title="Contact" />

      <p>
      If you&apos;re interested in discussing opportunities, projects, or collaborations, I&apos;d be happy to connect. Please use the contact options below for inquiries.
      </p>

      <ul>
        {contacts.map((contact) => {
          return (
            <li className="!ml-0 !list-none" key={contact.name}>
              <CTA href={contact.href}>{contact.name}</CTA>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
