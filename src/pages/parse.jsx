import "./page.css";

import HelpBtn from "../components/common/HelpBtn";

import Helper from "../components/Containers/Helper";
import { Garos } from "../components/Containers/Helper/Helper.stories";

export default function Parse() {
  return (
    <article className={"parse"}>
      <h1>
        1 단위
        <HelpBtn idx={"1 단위 도움말"} />
      </h1>
      <section className={"helpers"}>
        <Helper {...Garos.args} />
      </section>
      <section className={"contents"}></section>
    </article>
  );
}
