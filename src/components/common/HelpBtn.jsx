import { useState } from "react";

import "../../styles/common/HelpBtn.css";
import Modal from "./Modal";

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
};

export default function HelpBtn({ idx }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <button className="help-icon" onClick={() => setModal(true)}>
        ?
      </button>
      {modal ? <Modal setModal={setModal} data={data[idx]} /> : ""}
    </>
  );
}
