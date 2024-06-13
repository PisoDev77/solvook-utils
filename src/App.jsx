import { HashRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as Pages from './pages';
import Header from './components/Header';

// prettier-ignore
const routes = [
  { path: "", elementName: "Home", caption: "Home" },
  { path: "extractBody", elementName: "ExtractBody", caption: "지문추출" },
  { path: "openJSON", elementName: "OpenJSON", caption: "JSON 파일 까보기" },
  { path: "excel", elementName: "Excel", caption: "Excel" },
  { path: "cbs", elementName: "CBS", caption: "CBS" },
  { path: "autofy", elementName: "Autofy", caption: "자동화" },
  { path: "timer", elementName: "Timer", caption: "Google Time Timer" },
];

function App() {
	return (
		<HashRouter>
			<Header routes={routes} />
			<Routes>
				{routes.map(({ path, elementName }, idx) => {
					const $Page = Pages[elementName];
					return <Route path={path} element={<$Page />} key={'route-' + idx} />;
				})}
			</Routes>
			<ToastContainer autoClose={1500} />
		</HashRouter>
	);
}

export default App;
