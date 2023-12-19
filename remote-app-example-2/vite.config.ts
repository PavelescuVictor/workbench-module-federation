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
		target: 'esnext',

		// Extra
		modulePreload: false,
		minify: false,
		cssCodeSplit: false,
	},
	plugins: [
		// Config settings for the fefderation plugin
		federation({
			// Required name for module
			name: 'remote-app-2',

			// Mofile file name (not required)
			filename: 'remote-app-2.js',

			// Exposed components to the public
			exposes: {
				'./Shared-component-example-3': './src/components/SharedComponentExample3',

				// Diiferent more tailored approach to exposing.
				'./Shared-component-example-4': {
					import: './src/components/SharedComponentExample4',
					name: 'SharedComponentExample4',
				}
			},

			// Shared resources 
			shared: ['react', 'react-dom'],
		}),
		react()
	],
})
