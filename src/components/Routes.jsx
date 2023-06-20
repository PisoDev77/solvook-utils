import { Link, useLocation } from "react-router-dom";

import { collections } from "../constant/informations";
import Modal from "./Modal";

export default function RoutesNav({ routes }) {
  const location = useLocation();

  const { name, contentsList } = collections.links;

  return (
    <nav className="main-nav">
      <ul>
        {routes.map(({ path, caption }) => (
          <li key={path}>
            {/* prettier-ignore */}
            <Link
              className={path === location.pathname ? "current" : ""}
              to={path}>
                {caption}
            </Link>
          </li>
        ))}
      </ul>

      {/* prettier-ignore */}
      <Modal
        title={name}
        contentList={contentsList.map(({ title, link, description }) => ({
          content: (<Link className="custom-link" to={link} target="_blank" rel="noopener noreferrer">{title}</Link>),
          description,}))}
      />
    </nav>
  );
}
