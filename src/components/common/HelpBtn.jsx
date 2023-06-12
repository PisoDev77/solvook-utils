import { useState } from "react";

import "../../styles/common/HelpBtn.css";
import Modal from "./Modal";

import Helper from "../../components/Containers/Helper";
import { Garos } from "../../components/Containers/Helper/Helper.stories";

import { copyTargetDom } from "../../lib/copy";

const data = {
  "단일 문제 도움말": { title: "단일 문제 도움말", contents: [] },
  "통합 문제 도움말": {
    title: "통합 문제 도움말",
    contents: [
      "※ 를 복사해서 질문에 붙여넣기",
      "예시) 24번 ~ 26번 / 태그: 24번,25번,26번,11,33,34",
      "잘못된 예시) 24번 ,25번,26번,11,33,34 || 24번,25번,26번,11, 33,34",
    ],
  },
  "1 단위 도움말": {
    title: "1 단위 도움말",
    contents: ["할 수 있습니다."],
  },
  가로세트: {
    title: "가로 세트",
    contents: [<Helper {...Garos.args} />],
  },
  질문세트: {
    title: "질문 세트",
    contents: [
      <button onClick={(e) => copyTargetDom(e.target)}>
        ". 적절한 어휘/어법을 고르시오."
      </button>,
      <button onClick={(e) => copyTargetDom(e.target)}>
        "※. 다음 글을 읽고 물음에 답하시오."
      </button>,
      <button onClick={(e) => copyTargetDom(e.target)}>
        ". 빈칸에 들어갈 적절한 단어를 쓰시오."
      </button>,
      <button onClick={(e) => copyTargetDom(e.target)}>
        ". 다음 각 문장을 해석하시오."
      </button>,
      <button onClick={(e) => copyTargetDom(e.target)}>
        ". 문맥 상 주어진 문장 다음에 이어질 글의 순서를 쓰시오."
      </button>,
      <button onClick={(e) => copyTargetDom(e.target)}>
        ". 아래 글을 보고 문장을 재배열 하시오."
      </button>,
    ],
  },
};

export default function HelpBtn({ idx, caption = "?" }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <button className="help-icon" onClick={() => setModal(true)}>
        {caption}
      </button>
      {modal ? <Modal setModal={setModal} data={data[idx]} /> : ""}
    </>
  );
}
