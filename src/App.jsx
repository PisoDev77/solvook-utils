import { BrowserRouter, Routes, Route } from "react-router-dom";

import RoutesNav from "./components/Routes";

import Answer from "./components/Answer";

import Parsing from "./pages/parsing";
import TemplateP from "./pages/template";
import Tmp from "./pages/tmp";
import Tips from "./pages/tips";

function App() {
  return (
    <BrowserRouter>
      <RoutesNav />
      <Routes>
        <Route path="/solvook-utils" element={<Parsing />} />
        <Route path="/answer-to-pdf" element={<Answer />} />
        <Route path="/temp" element={<TemplateP />} />
        <Route path="/tmp" element={<Tmp />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
