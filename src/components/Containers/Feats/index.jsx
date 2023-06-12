import "./feats.css";

import { copyTargetDom } from "../../../lib/copy";

export default function Feats(props) {
  const {
    description,
    question,
    translationEngParagraph,
    essayBox,
    answerBox,
  } = props;

  return (
    // prettier-ignore
    <>
      <h4>{description}</h4>
      <button onClick={(e)=>{copyTargetDom(e.target.nextElementSibling)}}>복사하기</button>
      <div>
        {
          question !== null ? 
          (<ol className="question-box"><li>{question}</li></ol>) : 
          (`질문이 필요합니다.`)
        }
        {
          translationEngParagraph !== null ? 
          (<p className="passage-box">{translationEngParagraph}</p>) : 
          (`X You need a english paragraph to tralate. Please, write english para graph!`)
        }
        {
          essayBox !== null ? 
          (<div class="essay-box"><p>{essayBox}</p></div>) : 
          (`서술형 답안을 작성할 공간입니다만, 에러가 있어서 이 문장이 보이는 겁니다.`)
        }
        {
          answerBox !== null ? 
          (<div class="answer-box">답 : {answerBox}</div>) : 
          (`답이 작성되어 있는 공간입니다만, 에러가 났습니다.`)
        }
      </div>
    </>
  );
}
