import { defineConfig } from 'vite'
// import path from 'node:path';
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// Path to each remote app generated files after build
// Used if no serving server was started for the resources after build
// const REMOTE_APP_1_PATH = path.join(__dirname, '../remotes/first-app/');
// const REMOTE_APP_2_PATH = path.join(__dirname, '../remotes/second-app/');

export default defineConfig({
	// Setting up custom port for the application
	server: {
		port: 4000,
	},

	// Static imports that rely on browser "Top-Level await" feature may not be available for some target environments
	// Either setup target to "esnext" or use @vite-plugin-top-level-await
	build: {
		target: 'es2020',

		// Extra
		modulePreload: false,
		minify: false,
		cssCodeSplit: false,
	},
	plugins: [
		react(),
		federation({
			// Required name for module
			name: 'host',

			// Declaring remote modules
			remotes: {
				// Linking remote applications with relative path to dist folders containing resources after app build
				// remote_app_1: path.join(REMOTE_APP_1_PATH, 'dist/assets/shared-components-1.js'),
				// remote_app_2: path.join(REMOTE_APP_2_PATH, 'dist/assets/shared-components-2.js'),

				// Linking remote applications with url path to resources served via a server to localhost:portNumber after app build
				'first-app': 'http://localhost:4010/assets/first-app.js',
				'second-app': 'http://localhost:4011/assets/second-app.js',
			},

			// Shared resources
			shared: ['react', 'react-dom']
		}),
	],
})
