import { BrowserRouter, Routes, Route } from "react-router-dom";

import RoutesNav from "./components/Routes";

import Answer from "./components/Answer";

import Parsing from "./pages/parsing";
import TemplateP from "./pages/template";

function App() {
  return (
    <BrowserRouter>
      <RoutesNav />
      <Routes>
        <Route path="/solvook-utils" element={<Parsing />} />
        <Route path="/answer-to-pdf" element={<Answer />} />
        <Route path="/temp" element={<TemplateP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
