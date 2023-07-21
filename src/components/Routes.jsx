import { Link, useLocation } from "react-router-dom";

import { collections } from "../constant/informations";
import Modal from "./Modal";
import Button from "./Button";
import { CopytextButton } from "./Button/Button.stories";

export default function RoutesNav({ routes }) {
  const location = useLocation();

  const { name: linksName, contentsList: linkList } = collections.links;
  const { name: standardQuestionsName, contentsList: standardQuestionList } =
    collections.standardQuestions;
  const { name: circleNumsName, contentsList: circleNumList } =
    collections.circleNums;

  const circleArr = new Array(15).fill(0x2460).map((num, idx) => (
    <Button {...CopytextButton.args} type={"copy-text-button"}>
      {String.fromCharCode(num + idx)}
    </Button>
  ));

  return (
    <nav className="main-nav">
      <ul>
        {routes.map(({ path, caption }) => (
          <li key={path}>
            {/* prettier-ignore */}
            <Link
              className={path === location.pathname ? "current" : ""}
              to={path}>
                {caption}
            </Link>
          </li>
        ))}
      </ul>

      {/* prettier-ignore */}
      <section>
        <Modal 
        title={circleNumsName}
        contentList={[...circleNumList.map(({content,description})=> ({ 
          content:<Button {...CopytextButton.args}>{content}</Button>, 
          description,})), {content: circleArr, description: '원하는 숫자를 클릭하면 복사가 됩니다.'}]}
          />
        <Modal 
        title={standardQuestionsName}
        contentList={standardQuestionList.map(({content,description})=> ({ 
          content:<Button {...CopytextButton.args}>{content}</Button>, 
          description,}))}
          />
        <Modal
        title={linksName}
        contentList={linkList.map(({ title, link, description }) => ({
          content: (<Link className="custom-link" to={link} target="_blank" rel="noopener noreferrer">
                      {title}
                    </Link>),
          description,}))}
        />
      </section>
    </nav>
  );
}
