// src/service-worker.js

self.addEventListener('install', (event) => {
	console.log('Service Worker installing.');
	// Perform install steps
});

self.addEventListener('activate', (event) => {
	console.log('Service Worker activating.');
	// Perform activate steps
});

self.addEventListener('fetch', (event) => {
	console.log('Fetching:', event.request.url);
	// Perform fetch steps
});

self.addEventListener('notificationclick', (event) => {
	event.notification.close();
	event.waitUntil(clients.openWindow('/solvook-utils'));
});
