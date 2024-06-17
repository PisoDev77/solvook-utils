import { HashRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as Pages from './pages';
import Header from './components/Header';
import AMF from './components/SVG/AMF';

// prettier-ignore
const routes = [
  { path: "", elementName: "Home", caption: "Home" },
  { path: "openJSON", elementName: "OpenJSON", caption: "JSON 파일 까보기" },
  { path: "cbs", elementName: "CBS", caption: "CBS" },
  { path: "timer", elementName: "Timer", caption: "Google Time Timer" },
  { path: "qslayer", elementName: "QSlayer", caption: "QSlayer" },
];

function App() {
	const Page404 = Pages['Page404'];
	return (
		<HashRouter>
			<Header routes={routes} />
			<Routes>
				{routes.map(({ path, elementName }, idx) => {
					const $Page = Pages[elementName];
					return <Route path={path} element={<$Page />} key={'route-' + idx} />;
				})}
				<Route path='*' element={<Page404 />} />
				<Route path='apii' element={<Pages.PlayWright />} />
			</Routes>
			<ToastContainer autoClose={1500} />
			<footer className='main-footer'>
				<AMF />
			</footer>
		</HashRouter>
	);
}

export default App;
