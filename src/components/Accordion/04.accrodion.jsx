import { useEffect, useRef } from 'react';

export default function Accrodion04({ data }) {
	const ref = useRef(null);
	const isFst = useRef(false);

	const initiator = () => {
		const $ul = ref.current;

		$ul.classList.add('container');

		const items = data.map((d, idx) => {
			const $li = document.createElement('li');
			$li.className = 'accordion-item css anime1 close';

			const $title = document.createElement('h4');
			$title.textContent = d.title;
			const $content = document.createElement('p');
			$content.textContent = d.content;

			$li.append($title);
			$li.append($content);

			return $li;
		});

		$ul.append(...items);

		$ul.addEventListener('click', (e) => {
			const $li = e.target.closest('li');
			if (!$li.classList.contains('accordion-item')) return;

			items.forEach((i) => {
				i.classList.toggle('close', true);
				i.classList.toggle('open', false);
			});

			$li.classList.toggle('close', false);
			$li.classList.toggle('open', true);
		});
	};

	useEffect(() => {
		if (!isFst.current) {
			initiator();
		}
		isFst.current = true;
	}, []);

	return (
		<>
			<h3>4. Vanilla - 3번째 예제 VanillaJS로 옮기기</h3>
			<p></p>
			<ul ref={ref}></ul>
		</>
	);
}
