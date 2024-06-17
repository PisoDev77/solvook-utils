import { useEffect } from 'react';
import { toast } from 'react-toastify';

import TimerIcon from '../../assets/timer.svg';

export default function usePushNotification() {
	useEffect(() => {
		if (!('Notification' in window)) {
			toast.error('현재 브라우저는 알림을 지원하지 않습니다.', {
				position: 'bottom-center',
			});
		} else if (Notification.permission === 'granted') {
			// console.log('알림 권한이 이미 허용되었습니다.');
		} else if (Notification.permission !== 'denied') {
			Notification.requestPermission().then((permission) => {
				if (permission === 'granted') {
					toast.success('알림을 허용합니다.', {
						position: 'bottom-center',
					});
				}
			});
		}
	}, []);

	const timerNoti = ({ title, body }) => {
		// if (Notification.permission === 'granted') {
		// 	new Notification(title, { ...options });
		// }
		if (navigator.serviceWorker && 'Notification' in window && Notification.permission === 'granted') {
			navigator.serviceWorker.ready.then((registration) => {
				registration.showNotification(title, {
					body,
					icon: TimerIcon + `?color=${encodeURIComponent('red')}`, // 알림 아이콘 (선택 사항)
				});
			});
		}
	};

	return { timerNoti };
}
