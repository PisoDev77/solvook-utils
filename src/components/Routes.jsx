import { Link, useLocation } from "react-router-dom";

export default function RoutesNav({ routes }) {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {routes.map(({ path, caption }) => (
          <li key={path}>
            <Link
              className={path === location.pathname ? "current" : ""}
              to={path}
            >
              {caption}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
