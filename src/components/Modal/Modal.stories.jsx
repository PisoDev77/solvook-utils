import Modal from ".";

export default {
  title: "Common/Modal",
  component: Modal,
};

export const HelpModal = {
  args: {
    title: "도움말 모달",
    contentList: [
      { content: "설명할 내용의 제목 또는 요약 1", description: "설명1" },
      { content: "설명할 내용의 제목 또는 요약 2", description: "설명2" },
    ],
  },
};

export const CollectionModal = {
  args: {
    title: "모음 모달",
    contentList: [
      { content: "복사될 DOM 또는 TEXT 1", description: "설명1" },
      { content: "복사될 DOM 또는 TEXT 2", description: "설명2" },
    ],
  },
};
