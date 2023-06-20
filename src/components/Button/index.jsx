import "./button.css";

export default function Button({ children, onClick = null, type }) {
  if (onClick !== null)
    return (
      <button className={type} onClick={onClick}>
        {children}
      </button>
    );
  else return <button className={type}>{children}</button>;
}
