import "./page.css";

import QuestionType from "../components/QuestionType";
import Garo from "../components/Garo";
import Sero from "../components/Sero";
import ABC from "../components/ABC";
import OrderABC from "../components/OrderABC";
import SubAnswer from "../components/SubAnswer";
import TemplateP from "../components/template";

import Helper from "../components/Containers/Helper";
import { Garos } from "../components/Containers/Helper/Helper.stories";
/**
 * # Paring 페이지
 * ## 구성
 * - QuestionType 컴포넌트
 *  + 문제 유형을 생성
 *  + 문제 유형 분류 ex) 11번,12번,3세트,11,34
 * - Garo 컴포넌트
 *  + 선지 중 가로형 선택지 템플릿 제공
 *
 * @returns {JSX.Element}
 */
export default function Parsing() {
  return (
    <article className={"parsing"}>
      <section className={"helpers"}>
        <Helper {...Garos.args} />
      </section>
      <section className={"contents"}>
        <QuestionType />
        <Garo />
        <TemplateP />
        <Sero />
        <ABC />
        <OrderABC />
        <SubAnswer />
      </section>
    </article>
  );
}
