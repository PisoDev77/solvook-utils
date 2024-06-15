import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true,
			},
			workbox: {
				// Customize workbox settings if needed
			},
			manifest: {
				name: 'My Vite App',
				short_name: 'ViteApp',
				start_url: '/',
				display: 'standalone',
				background_color: '#ffffff',
				theme_color: '#42b883',
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		}),
	],
	base: '/solvook-utils',
	server: {
		host: true,
		proxy: {
			'/api': {
				changeOrigin: true,
				target: 'https://v2api.solvook.com/api',
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
			'/cbs': {
				changeOrigin: true,
				target: 'https://t-cmsapi.vsaidt.com/api/',
				rewrite: (path) => path.replace(/^\/cbs/, ''),
			},
		},
	},
});
