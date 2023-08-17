import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RoutesNav from "./components/Routes";

import * as Pages from "./pages";

// prettier-ignore
const routes = [
  { path: "/solvook-utils", elementName: "Parsing", caption: "파싱" },
  { path: "/solvook-utils/template", elementName: "TemplateA", caption: "템플릿 A" },
  { path: "/solvook-utils/tmp", elementName: "Tmp", caption: "TMP" },
  { path: "/solvook-utils/split", elementName: "Split", caption: "나누기" },
  { path: "/solvook-utils/templateB", elementName: "TemplateB", caption: "템플릿 B" },
];

function App() {
  return (
    <BrowserRouter>
      <RoutesNav routes={routes} />
      <Routes>
        {routes.map(({ path, elementName }) => {
          const $Page = Pages[elementName];
          return <Route path={path} element={<$Page />} />;
        })}
      </Routes>
      <ToastContainer autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
