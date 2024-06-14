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
			'/cbs': {
				changeOrigin: true,
				target: 'https://t-cmsapi.vsaidt.com/api/',
				rewrite: (path) => path.replace(/^\/cbs/, ''),
			},
		},
	},
});
