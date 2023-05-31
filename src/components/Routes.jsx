import { Link, useLocation } from "react-router-dom";

export default function RoutesNav() {
  const location = useLocation();

  const routes = [
    { pathname: "/solvook-utils", caption: "파싱" },
    { pathname: "/answer-to-pdf", caption: "정답 PDF" },
    { pathname: "/temp", caption: "임시" },
    { pathname: "/tmp", caption: "TMP" },
    { pathname: "/tips", caption: "Tips" },
    { pathname: "/parsingbyone", caption: "파싱 하나" },
  ];

  return (
    <nav>
      <ul>
        {routes.map(({ pathname, caption }) => (
          <li key={pathname}>
            <Link
              className={pathname === location.pathname ? "current" : ""}
              to={pathname}
            >
              {caption}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
