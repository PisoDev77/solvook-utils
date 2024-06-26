import { Link } from 'react-router-dom';

export default function SubPages({ subpages }) {
	return (
		<section className='sub-page'>
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
