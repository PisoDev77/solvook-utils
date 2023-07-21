const collections = {
  links: {
    name: "링크 모음",
    contentsList: [
      {
        title: "파싱 페이지 열기",
        link: "https://studio.staging.solvook.com/tester",
        description: "파싱 작업을 할 수 있는 페이지입니다.",
      },
      {
        title: "파싱완료 리스트 구글 스프레시트 열기",
        link: "https://docs.google.com/spreadsheets/d/11u1FyF5qZn7Np-feeeahfBDAoGDithuckzOxwe9fNtk/edit#gid=0",
        description:
          "파싱 작업목록을 확인하거나 완료를 작성하는 구글 스프레드 시트입니다.",
      },
      {
        title: "파싱 오류 리스트",
        link: "https://docs.google.com/spreadsheets/d/1SNBnqGNHuVqHwulNLFtNoDmfDPSVWShTotNWo8OSwoE/edit#gid=1158280856",
        description:
          "파싱 작업중 중복 등록 및 원본과 다른 수정을 기입하는 구글 스프레드 시트입니다.",
      },
      {
        title: "수정 가이드라인 (구?)",
        link: "https://docs.google.com/presentation/d/1Af1BEUOlbu5Y9mUMas3j6QYmBavJlVgJzfAe1gMN4Eo/edit#slide=id.g24a8e322ad7_0_10",
        description:
          "파싱 작업중 가이드 라인 및 오류 케이스를 확인할 수 있는 구글 프레젠테이션입니다.",
      },
      {
        title: "수정 가이드라인 템플릿",
        link: "https://docs.google.com/presentation/d/1fI9PsKXQmD-Fr1ZxD7Tdgy8Hsuf3ZMACGOEKDre2xdo/edit#slide=id.g2516b6519cb_17_5",
        description:
          "그동안 파싱 작업중 나왔던 예시들을 템플릿화하여 작성된 구글 프레젠테이션입니다.",
      },
    ],
  },
  // prettier-ignore
  standardQuestions: {
    name: "질문 모음",
    contentsList: [
      { content: "※ 다음 글을 읽고 물음에 답하시오.", description: "" },
      { content: ". 다음 글을 읽고 물음에 답하시오.", description: "" },
      { content: ". 아래 글을 보고 문장을 재배열 하시오.", description: "" },
      { content: ". 다음 글을 보고 영작하시오.", description: "" },
      { content: ". 적절한 어휘/어법을 고르시오.", description: "" },
      { content: ". 빈칸에 들어갈 적절한 단어를 쓰시오.", description: "" },
      { content: ". 빈칸에 들어갈 적절한 단어/문장을 쓰시오. ", description: "" },
      { content: ". 주어진 문장 다음에 이어질 글의 순서를 쓰시오.", description: "" },
      { content: ". 아래 글을 보고 문장을 재배열하시오.", description: "" },
      { content: ". 아래 글을 보고 단어를 재배열하시오.", description: "" },
      { content: ". 다음 아래 문장을 번역하시오.", description: "" },
      { content: ". 다음 단어의 뜻으로 알맞은 것을 고르시오. (단어를 보여주고 뜻 고르기)", description: "" },
      { content: ". 다음 뜻에 알맞은 단어를 고르시오. (뜻을 보여주고 단어고르기)", description: "" },
      { content: ". 다음 글을 읽고 O, X 중 알맞은 것을 고르시오.", description: "" },
      { content: ". 주어진 문장이 들어가기에 가장 적절한 곳을 고르시오.", description: "" },
      { content: ". 다음 글을 읽고 T, F 중 알맞은 것을 고르시오. ", description: "" },
      { content: ". 빈칸에 들어갈 적절한 단어를 쓰시오. ", description: "" },
      { content: ". 적절한 어휘/어법을 고르시오. (단. 기입해야할 곳은 기입하시오.) ", description: "" }
    ],
  },
  circleNums: {
    name: "자주 사용하는 문자",
    contentsList: [
      {
        content: "※",
        description: "통합문제 질문 컴포넌트 앞에 사용되는 문자",
      },
      {
        content: "→",
        description:
          "서술형이나 주관식, 방향 등을 표시할 때 사용되는 화살표 문자",
      },
    ],
  },
};

export { collections };
