import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Name</h1>
      <p>Position</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        cumque eaque cum suscipit adipisci, ipsum totam eveniet debitis
        voluptate fugit iusto enim, officiis sunt perspiciatis dicta est
        eligendi ratione molestias?
      </p>
      <ul>
        <li>
          <Link href="/works">Works</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
