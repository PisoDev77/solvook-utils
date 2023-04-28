import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import QueType from "./components/QueType";
import Garo from "./components/Garo";
import Sero from "./components/Sero";
import ABC from "./components/ABC";
import Answer from "./components/Answer";
import Temp from "./components/temp";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">파싱</Link>
          </li>
          <li>
            <Link to="/answer-to-pdf">정답 PDF 만들기</Link>
          </li>
          <li>
            <Link to="/temp">임시</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <QueType />
              <Garo />
              <Sero />
              <ABC />
            </>
          }
        />
        <Route path="/answer-to-pdf" element={<Answer />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
