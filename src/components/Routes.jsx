import { Link, useLocation } from "react-router-dom";

import Popup from "./Popup";
import { LinkPopup, QuestionPopup, CharsPopup } from "./Popup/Popup.stories";

export default function RoutesNav({ routes }) {
  const location = useLocation();

  return (
    <nav className="main-nav">
      <ul>
        {routes.map(({ path, caption }) => (
          <li key={path}>
            {/* prettier-ignore */}
            <Link className={path === location.pathname ? "current" : ""} to={path}>
              { caption }
            </Link>
          </li>
        ))}
      </ul>

      <section>
        <Popup {...CharsPopup.args}>문자모음</Popup>
        <Popup {...QuestionPopup.args}>질문모음</Popup>
        <Popup {...LinkPopup.args}>링크모음</Popup>
      </section>
    </nav>
  );
}
