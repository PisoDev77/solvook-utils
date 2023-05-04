import QuestionType from "../components/QuestionType";
import Garo from "../components/Garo";
import Sero from "../components/Sero";
import ABC from "../components/ABC";

export default function Parsing() {
  return (
    <article className={"parsing"}>
      <QuestionType />
      <Garo />
      <Sero />
      <ABC />
    </article>
  );
}
