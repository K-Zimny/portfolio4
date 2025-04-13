import style from "./cta.module.css"
import Link from "next/link";

export default function CTA({children, href, ctaStyle, ctaType, target, rel}) {
    
    return (
        <Link className={`${style.cta} ${ctaStyle} ${ctaType}`} href={href} target={target} rel={rel}>{children}</Link>
    )
}
