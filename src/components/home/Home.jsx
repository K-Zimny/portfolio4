import style from "@/components/home/home.module.css";
import Link from "next/link";
import PageHeader from "../pageheader/PageHeader";

const { name, position, intro, siteLinks } = {
  name: "Kenneth Zimny",
  position: "Frontend Developer",
  intro:
    "A versatile developer specializing in frontend, full-stack, and embedded systems, I have successfully developed and deployed diverse projects, showcasing adaptability and cross-disciplinary expertise. With experience in launching high-security web applications for leading enterprises, I take ownership of high-impact features, enhancing user experience and meeting business objectives. Additionally, I hold CompTIA Security+ and AWS Cloud Practitioner certifications, and have thrived in various roles, including as a sole developer, business owner, and team member.",
  siteLinks: [
    { href: "/works", title: "Works" },
    { href: "/skills", title: "Skills" },
    { href: "/contact", title: "Contact" },
  ],
};

export default function Home() {
  return (
    <div id={style.home}>
      <PageHeader title={name} subtitle={position} />

      <p>{intro}</p>

      <ul>
        {siteLinks.map((link) => {
          return (
            <li key={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
