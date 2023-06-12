import { BrowserRouter, Routes, Route } from "react-router-dom";

import RoutesNav from "./components/Routes";

import * as Pages from "./pages";

const routes = [
  { path: "/solvook-utils", elementName: "Parsing", caption: "파싱" },
  {
    path: "/solvook-utils/template",
    elementName: "TemplateP",
    caption: "템플릿",
  },
  // { path: "/solvook-utils/tmp", elementName: "Tmp", caption: "TMP" },
  // { path: "/solvook-utils/feat", elementName: "Feat", caption: "특성" },
  // { path: "/solvook-utils/parse", elementName: "Parse", caption: "1 단위" },
  { path: "/solvook-utils/split", elementName: "Split", caption: "나누기" },
  // { path: "/solvook-utils/helpers", elementName: "Helper", caption: "헬퍼" },
  // { path: "/solvook-utils/configuration", elementName: "Feat", caption: "설정" },
];

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
    </BrowserRouter>
  );
}

export default App;
