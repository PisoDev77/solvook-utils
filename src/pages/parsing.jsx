import QuestionType from "../components/QuestionType";
import Garo from "../components/Garo";
import Sero from "../components/Sero";
import ABC from "../components/ABC";
import OrderABC from "../components/OrderABC";

export default function Parsing() {
  return (
    <article className={"parsing"}>
      <QuestionType />
      <Garo />
      <Sero />
      <ABC />
      <OrderABC />
    </article>
  );
}
