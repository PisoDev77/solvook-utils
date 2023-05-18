import "./textarea.css";

export default function Textarea(props) {
  const { name } = props;

  return (
    <textarea className={"input-textarea"} name={name} rows={7}></textarea>
  );
}
