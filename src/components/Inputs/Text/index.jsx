import "./text.css";
export default function Text(props) {
  const { name } = props;

  return <input className={"input-text"} type="text" name={name}></input>;
}
