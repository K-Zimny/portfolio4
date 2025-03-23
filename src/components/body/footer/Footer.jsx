import style from "@/components/body/footer/footer.module.css";
import ContactBar from "@/components/body/footer/contactbar/ContactBar";

export default function Footer() {
  return (
    <footer id={style.footer}>
      <ContactBar />
    </footer>
  );
}
