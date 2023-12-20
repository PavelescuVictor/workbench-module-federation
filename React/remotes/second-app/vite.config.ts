import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Import federation plugin
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
	// Setting up custom port for the application
	server: {
		port: 4011,
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
		federation({
			// Required name for module
			name: 'second-app',

			// Mofile file name (not required)
			filename: 'second-app.js',

			// Exposed components to the public
			exposes: {
				'./SharedComponent3': './src/components/SharedComponent3',

				// Diiferent more tailored approach to exposing.
				'./SharedComponent4': {
					import: './src/components/SharedComponent4',
					name: 'SharedComponent4',
				}
			},

			// Shared resources 
			shared: ['react', 'react-dom'],
		}),
		react()
	],
})
