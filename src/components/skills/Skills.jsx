import style from "./skills.module.css";
import skillsData from "@/data/skills.json";

export default function Skills() {
  return (
    <>
      {skillsData.map((category) => {
        return (
          <section className={style.category} key={category.title}>
            <h2>{category.title}</h2>
            <ul>
              {category.items.map((item) => {
                return (
                  <li className={style.skill} key={item}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </>
  );
}
