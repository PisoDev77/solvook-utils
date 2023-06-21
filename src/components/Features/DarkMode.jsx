import "./darkmode.css";

export default function DarkMode() {
  return (
    <div
      className="darkmode-toggle-btn"
      onClick={(e) => {
        document.getElementById("root").classList.toggle("dark");
        e.target.classList.toggle("dark");
      }}
    >
      <span>Light</span>
      <span>Dark</span>
    </div>
  );
}
