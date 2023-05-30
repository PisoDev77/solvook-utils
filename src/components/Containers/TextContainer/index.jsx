import "./textcontainer.css";

import { Heading } from "../../Titles";
import { Text } from "../../Inputs";

export default function TextContainer(props) {
  const { level, label, name } = props;
  return (
    <div className={"text-container"}>
      <Heading className={"text-container-title"} level={level}>
        {label}
      </Heading>
      <Text className={"text-container-text"} name={name} />
    </div>
  );
}
