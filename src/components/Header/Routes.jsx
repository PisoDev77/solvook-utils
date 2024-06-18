import { Link, useLocation } from 'react-router-dom';

export default function Routes({ routes, isMobile = false, handlePageList = null }) {
	const location = useLocation();

	return (
		<nav className='main-header-nav'>
			<ul>
				{routes.map(({ path, caption }) => (
					<li key={path} className={'/' + path === location.pathname ? 'current' : ''}>
						<Link
							className={('/' + path === location.pathname ? 'current' : '') + ' link'}
							to={path}
							onClick={handlePageList}
						>
							{caption}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
