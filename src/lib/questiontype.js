/**
 * ## getSingluar
 * > 일반 문제 유형 태그를 생성하는 로직
 * ### 사용 중
 * - QuestionType 컴포넌트
 * @param {string} questionsStr
 * @returns {string[]}
 *
 * @example
 *
 * getSingluar('1\t2\n3\t4');
 * // => ['1번,2', '3번,4']
 */
const getSingular = (questionsStr) => {
  /**
   * 1. 숫자로 시작하고
   * 2. 탭을 포함하며
   * 3. 그 뒤에 1개 이상의 숫자가 나오는 패턴 (m)
   */

  return (
    questionsStr.match(/^(\d+)\t(\d+)$/gm)?.map((match) => {
      const [num1, num2] = match.split("\t");
      return `${parseInt(num1)}번,${parseInt(num2)}`;
    }) || []
  );
};

const getPlural = (questionsStr) => {
  const regex = /^(\d+)\t(\d+)$/gm;
  const matches = [...questionsStr.matchAll(regex)];
  const questionTypes = matches.map((match) => match[2]);
  const questionNumbers = matches.map((match) => `${match[1]}번`);
  return [`${questionNumbers},${questionTypes}`];
};
export { getSingular, getPlural };
