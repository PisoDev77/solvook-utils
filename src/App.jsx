import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RoutesNav from "./components/Routes";

import * as Pages from "./pages";

const routes = [
  { path: "/solvook-utils", elementName: "Parsing", caption: "파싱" },
  {
    path: "/solvook-utils/template",
    elementName: "TemplateP",
    caption: "템플릿",
  },
  { path: "/solvook-utils/tmp", elementName: "Tmp", caption: "TMP" },
  // { path: "/solvook-utils/make", elementName: "Make", caption: "Make" },
  // { path: "/solvook-utils/feat", elementName: "Feat", caption: "왓츄노 타입" },
  // { path: "/solvook-utils/parse", elementName: "Parse", caption: "1 단위" },
  { path: "/solvook-utils/split", elementName: "Split", caption: "나누기" },

  // { path: "/solvook-utils/helpers", elementName: "Helper", caption: "헬퍼" },
  // {
  //   path: "/solvook-utils/configuration",
  //   elementName: "Feat",
  //   caption: "설정",
  // },
];

// const Playground = Pages.PlayGround;

function App() {
  return (
    <BrowserRouter>
      <RoutesNav routes={routes} />
      <Routes>
        {routes.map(({ path, elementName }) => {
          const $Element = Pages[elementName];
          return <Route path={path} element={<$Element />} />;
        })}
      </Routes>
      <ToastContainer autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
