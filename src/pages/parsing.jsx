import "./page.css";

import QuestionType from "../components/QuestionType";
import Sero from "../components/Sero";
import ABC from "../components/ABC";
import SubAnswer from "../components/SubAnswer";

import Helper from "../components/Containers/Helper";
import { Garos } from "../components/Containers/Helper/Helper.stories";

export default function Parsing() {
  return (
    <article className={"parsing"}>
      <section className={"contents"}>
        <QuestionType />
        <Sero />
        <ABC />
        <SubAnswer />
      </section>
      <section className={"helpers"}>
        <Helper {...Garos.args} />
      </section>
    </article>
  );
}
