export default function List({ qs, updateQ, deleteQ }) {
	const handleChange = (e, qId) => {
		const content = e.target.value;
		if (content.trim() === '') return;

		const _q = qs.find((q) => q.qId === qId);
		updateQ({ ..._q, content: e.target.value });
	};

	const handleDelete = (qId) => {
		deleteQ(qId);
	};

	return (
		<ul>
			{qs.length > 0
				? qs.map((q) => (
						<li key={'content-' + q.qId}>
							{<QSlayer {...q} handleChange={handleChange} handleDelete={handleDelete} />}
						</li>
				  ))
				: ''}
		</ul>
	);
}

function QSlayer({ qId, content, reg_date, mod_date, handleChange, handleDelete }) {
	return (
		<section className='qslayer-content'>
			<h2>
				<input type='text' name='content' id='content' value={content} onChange={(e) => handleChange(e, qId)} />
			</h2>
			<div className='dates'>
				<span>{reg_date}</span>
				<span>{mod_date ?? '-'}</span>
			</div>
			<button onClick={() => handleDelete(qId)}>DELETE</button>
		</section>
	);
}
