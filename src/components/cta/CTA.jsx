import style from "./cta.module.css"
import Link from "next/link";

export default function CTA({children, href, ctaStyle}) {
    
    return (
        <Link className={`${style.cta} ${ctaStyle}`} href={href}>{children}</Link>
    )
}
