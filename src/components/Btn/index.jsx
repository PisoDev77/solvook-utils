import "./btn.css";

export default function Btn({ children, ...args }) {
  return <button {...args}>{children}</button>;
}
