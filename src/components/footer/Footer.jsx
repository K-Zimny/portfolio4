import style from "@/components/footer/footer.module.css";
import ContactBar from "./contactbar/ContactBar";

export default function Footer() {
  return (
    <footer id={style.footer}>
      <ContactBar />
    </footer>
  );
}
