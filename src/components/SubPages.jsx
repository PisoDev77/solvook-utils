import { Link } from 'react-router-dom';

export default function SubPages({ subpages, PageIcon }) {
	return (
		<article className='sub-page'>
			<h1 style={{ textAlign: 'center' }}>
				<PageIcon />
			</h1>

			<nav>
				<ul>
					{subpages.map(({ name, path }) => (
						<li key={path + '_link'}>
							<Link to={path}>{name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</article>
	);
}
