import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr(), react()],
	base: '/solvook-utils',
	server: {
		proxy: {
			'/api': {
				changeOrigin: true,
				target: 'https://v2api.solvook.com/api',
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
			'/unit': {
				changeOrigin: true,
				target: 'https://api.staging.solvook.com/api',
				rewrite: (path) => path.replace(/^\/unit/, ''),
			},
			'/cbs': {
				changeOrigin: true,
				target: 'https://t-cmsapi.vsaidt.com',
				rewrite: (path) => path.replace(/^\/cbs/, ''),
			},
		},
	},
});
