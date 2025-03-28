import style from "./skills.module.css";
import skillsData from "@/data/skills.json";
import { Fragment } from "react";

export default function Skills() {
  return (
    <div id={style.skills}>
      {skillsData.map((category) => {
        return (
          <Fragment key={category.title}>
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
            <hr />
          </Fragment>
        );
      })}
    </div>
  );
}
