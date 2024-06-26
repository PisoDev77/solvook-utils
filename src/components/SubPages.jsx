import { Link } from 'react-router-dom';

export default function SubPages({ subpages, PageIcon }) {
	return (
		<section className='sub-page'>
			<h1 style={{ textAlign: 'center' }}>
				<PageIcon />
			</h1>

			<nav>
				<ul>
					{subpages.map(({ name, path }) => (
						<li>
							<Link to={path}>{name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
}
