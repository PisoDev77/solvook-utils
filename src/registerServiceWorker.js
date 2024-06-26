// src/registerServiceWorker.js

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/solvook-utils/service-worker.js')
			.then((registration) => {
				// console.log('Service Worker registered with scope:', registration.scope);

				registration.onupdatefound = () => {
					const installingWorker = registration.installing;
					installingWorker.onstatechange = () => {
						if (installingWorker.state === 'installed') {
							if (navigator.serviceWorker.controller) {
								// New content is available; please refresh.
								// console.log('New content is available; please refresh.');
								// Optionally prompt user to refresh the page
							} else {
								// Content is cached for offline use.
								// console.log('Content is cached for offline use.');
							}
						}
					};
				};
			})
			.catch((error) => {
				console.error('Service Worker registration failed:', error);
			});
	});
}
