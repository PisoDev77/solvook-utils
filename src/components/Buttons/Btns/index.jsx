import "./btns.css";

export default function Btns(props) {
  const { btns } = props;
  return (
    <div className={"btn-btns"}>
      {btns.map((btn) => (
        <button>{btn}</button>
      ))}
    </div>
  );
}
