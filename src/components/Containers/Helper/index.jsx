import "./helper.css";

import { Heading } from "../../Titles";

export default function Helper(props) {
  const { title, items } = props;
  return (
    <div className="helper">
      <Heading level={"h2"}>{title}</Heading>
      {items}
    </div>
  );
}
