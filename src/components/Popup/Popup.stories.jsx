import { Link } from "react-router-dom";

import Popup from ".";
import { questions, links, chars } from "../../constant";
import Btn from "../Btn";
import { CopytextBtn } from "../Btn/Btn.stories";

export default {
  title: "Container/Popup",
  component: Popup,
};

export const QuestionPopup = {
  args: {
    collections: questions.map(({ question }) => (
      <Btn {...CopytextBtn.args}>{question}</Btn>
    )),
  },
};

export const LinkPopup = {
  args: {
    collections: links.map(({ caption, description, url }) => (
      <li>
        <Link
          className="custom-link"
          to={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {caption}
        </Link>
        <br />
        <small style={{ paddingTop: "1rem" }}>{description}</small>
        <hr />
      </li>
    )),
  },
};

export const CharsPopup = {
  args: {
    collections: chars.map(({ char, description }) => (
      <li>
        <Btn {...CopytextBtn.args}>{char}</Btn>
        <p>{description}</p>
      </li>
    )),
  },
};
