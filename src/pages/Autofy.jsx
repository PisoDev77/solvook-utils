import { useEffect, useState } from 'react';

export default function Autofy() {
	const [CBSINFO, setCBSINFO] = useState({
		url: 'https://t-cms.vsaidt.com/cms-admin/index.html',
		uid: 'freelancer02',
	});

	const [processMsg, setProcessMsg] = useState('');

	useEffect(() => {
		const fetchData = async () => {};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Playwright Example</h1>
			{/* <div dangerouslySetInnerHTML={{ __html: pageContent }}></div> */}
		</div>
	);
}
