import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Import federation plugin
import federation from '@originjs/vite-plugin-federation';

// Import top level await plugin
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
	// Setting up custom port for the application
	server: {
		port: 4010,
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
		// Config settings for the fefderation plugin
		topLevelAwait({
			// The export name of top-level await promise for each chunk module
			promiseExportName: "__tla",
			// The function to generate import names of top-level await promise in each chunk module
			promiseImportName: i => `__tla${i}`
		}),
		federation({
			// Required name for module
			name: 'remote-app',

			// Declaring remote modules
			remotes: {
				// Linking remote applications with url path to resources served via a server to localhost:portNumber after app build
				'host-app': 'http://localhost:4000/assets/host-app.js',
			},

			// Modify file name (not required)
			filename: 'remote-app.js',

			// Exposed components to the public
			exposes: {
				'./RemoteComponent': './src/components/RemoteComponent',
			},

			// Shared resources 
			shared: ['react', 'react-dom'],
		}),
		react()
	],
})
