import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RoutesNav from './components/Routes';

import * as Pages from './pages';

// prettier-ignore
const routes = [
  { path: "/solvook-utils/", elementName: "Home", caption: "Home" },
  { path: "/solvook-utils/extractBody", elementName: "ExtractBody", caption: "지문추출" },
  { path: "/solvook-utils/openJSON", elementName: "OpenJSON", caption: "JSON 파일 까보기" },
  { path: "/solvook-utils/excel", elementName: "Excel", caption: "Excel" },
  { path: "/solvook-utils/cbs", elementName: "CBS", caption: "CBS" },
  { path: "/solvook-utils/autofy", elementName: "Autofy", caption: "자동화" },
  { path: "/solvook-utils/timer", elementName: "Timer", caption: "Google Time Timer" },
];

function App() {
	return (
		<BrowserRouter basename='/solvook-utils'>
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
