import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PlayWright() {
	const [keys, setKeys] = useState(['64530']);
	const [data, setData] = useState({});
	const [token, setToken] = useState('');

	useEffect(() => {
		const _token = '';
		setToken(_token);
		const user = {
			loginUserId: 'anonymousUser',
			id: 17,
			creator_id: 12,
			creator: 'cbstest8',
			creator_name: '하주연',
			regdate: '2023-12-11 17:23:36',
			updatedate: '2024-03-20 18:38:54',
			is_active: true,
			uid: 'freelancer02',
			name: '송승학',
			email: 'freelancer02',
			team: '프리랜서',
			updater: 'cbstest8',
			updater_id: 12,
			updater_name: '하주연',
			authgroup: '2,',
			role: null,
			token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmcmVlbGFuY2VyMDIiLCJyb2xlIjoiUk9MRV9WSUVXIiwiZXhwIjoxNzIwOTI1NTgxfQ.6gOVxvDEhzKqxn8aw9dGzP4Kdo8ggA9o1ioe7BxuYb4',
			full_count: null,
			tokenExpireDate: '1720925581',
			brandRole: [
				{
					authgroup_id: 2,
					authgroup_code: 'VAET0100',
					authgroup_name: '영어 교과 관리자',
					authgroup_auth: 'Library1,Contents1,Book1,Instrument1,Claim1,Meta1,AITutor1,System1,',
					brand_id: 3,
					brand_code: 'VAET01',
					brand_name: '영어 AI 디지털 교과서',
				},
			],
			password: '',
		};
		localStorage.setItem('user', JSON.stringify(user));
	}, []);
	const handleClick = () => {
		const fetchData = async (key) => {
			try {
				const response = await axios.post(
					'/cbs/contents/articleForSave',
					{
						article: { id: key, is_publicOpen: false },
						saveType: 'update',
					},
					{
						headers: {
							Authorization:
								'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmcmVlbGFuY2VyMDIiLCJyb2xlIjoiUk9MRV9WSUVXIiwiZXhwIjoxNzIwOTI1NTgxfQ.6gOVxvDEhzKqxn8aw9dGzP4Kdo8ggA9o1ioe7BxuYb4',
							'Access-Control-Allow-Origin': '*',
							'Access-Control-Allow-Methods': 'POST, GET, PUT',
							'Access-Control-Allow-Headers': 'Content-Type',
							'Content-Type': 'application/json',
							'Access-Control-Max-Age': '1800',
						},
					}
				);
				console.log(response.data); // 응답 데이터 출력 (예시)
			} catch (error) {
				console.error('Error (' + key + ') fetching data:', error);
			}
		};

		const keys = [
			57219, 57220, 57224, 57225, 57227, 57232, 57233, 57237, 57240, 57243, 57245, 57246, 57250, 57252, 57254,
			57255, 57262, 57263, 57267, 57423, 57424, 57426, 57429, 57430, 57431, 57432, 57434, 57436, 57437, 57439,
			57442, 57443, 57445, 57447, 57448, 57449, 57451, 57457, 57459, 57460, 57463, 57464, 57466, 57468, 57469,
			57471, 57474, 57477, 57482, 57483, 57484, 57485, 57488, 57489, 57493, 57601, 57602, 57603, 57617, 57618,
			57619, 57620, 57621, 57622, 57623, 57629, 57630, 57631, 57632, 57633, 57634, 57635, 57636, 78895, 78896,
			78897, 78898, 78899, 78901, 78902, 79284, 79285, 79286, 79287, 79288, 79289, 79290, 79291,
		];
		for (const key of keys) {
			fetchData(key + '');
		}
	};

	const tmp = () => {
		for (let i = 0; i < localStorage.length; i++) {
			let key = localStorage.key(i);
			let value = localStorage.getItem(key);
			console.log(`Key: ${key}, Value: ${value}`);
		}
	};

	return (
		<article className='playwright'>
			user update
			<button onClick={handleClick}>DOAPI</button>
			<iframe src='https://t-cms.vsaidt.com/cms-admin/index.html#' width={'100%'} frameborder='0'></iframe>
		</article>
	);
}
