import { BrowserRouter, Routes, Route } from "react-router-dom";

import RoutesNav from "./components/Routes";

import Answer from "./components/Answer";
import Temp from "./components/temp";

import Parsing from "./pages/parsing";

function App() {
  return (
    <BrowserRouter>
      <RoutesNav />
      <Routes>
        <Route path="/solvook-utils" element={<Parsing />} />
        <Route path="/answer-to-pdf" element={<Answer />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
