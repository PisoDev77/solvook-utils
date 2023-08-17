import Button from ".";
import Copy from "../../lib/Copys";

export default {
  title: "Common/Button",
  component: Button,
};

export const CloseButton = {
  args: {
    type: "close",
    children: "X",
  },
};

export const ModalButton = {
  args: {
    type: "modal-button",
    children: "모달 버튼",
  },
};

export const CopytextButton = {
  args: {
    type: "copy-text-button after",
    children: "텍스트 복사 버튼",
    onClick: (e) => {
      new Copy(e.target.textContent, "copy-text-button").copyText();
    },
  },
};
