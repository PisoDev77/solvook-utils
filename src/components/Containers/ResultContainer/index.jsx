import "./resultcontainer.css";

import { NormalParsing } from "../ParsingContainer/ParsingContainer.stories";
import { ParsingContainer } from "..";

export default function ResultContainer(props) {
  return (
    <section className={"parsing-result-container"}>
      <ParsingContainer {...NormalParsing.args} />
      <div className={"result"}></div>
    </section>
  );
}
