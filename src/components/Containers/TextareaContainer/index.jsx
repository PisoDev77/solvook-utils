import "./textareacontainer.css";

import { Heading } from "../../Titles";
import { Textarea } from "../../Inputs";

export default function TextareaContainer(props) {
  const { level, label, amounts = 1 } = props;

  const arr = new Array(amounts).fill(0);

  return (
    <div className={"textarea-container"}>
      <Heading className={"text-container-title"} level={level}>
        {label}
      </Heading>
      {arr.map((i) => (
        <Textarea />
      ))}
    </div>
  );
}
