import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RoutesNav from './components/Routes';

import * as Pages from './pages';

// prettier-ignore
const routes = [
  { path: "/solvook-utils/", elementName: "Home", caption: "Home" },
  { path: "/solvook-utils/지문추출", elementName: "지문추출", caption: "지문추출" },
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
