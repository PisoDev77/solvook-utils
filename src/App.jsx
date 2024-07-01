import { HashRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as Pages from './pages';
import Header from './components/Header';
import Footer from './components/Footer';

// prettier-ignore
const routes = [
  { path: "", elementName: "Home", caption: "Home" },
  { path: "json", elementName: "Json", caption: "JSON" },
  { path: "openJson", elementName: "OpenJSON", caption: "JSON 파일 까보기" },
  { path: "cbs", elementName: "CBS", caption: "CBS" },
  { path: "timer", elementName: "Timer", caption: "Google Time Timer" },
  { path: "additional", elementName: "Additional", caption: "Additional" },
];

function App() {
	const Page404 = Pages['Page404'];
	return (
		<HashRouter>
			<Header />
			<Routes>
				{routes.map(({ path, elementName }, idx) => {
					const $Page = Pages[elementName];
					return <Route path={path} element={<$Page />} key={'route-' + idx} />;
				})}
				<Route path='*' element={<Page404 />} />
				<Route path='apii' element={<Pages.PlayWright />} />
			</Routes>
			<Footer />
			<ToastContainer autoClose={1500} />
		</HashRouter>
	);
}

export default App;
