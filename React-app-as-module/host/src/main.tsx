import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Importing Host and Remote Apps
// import App from './App.tsx'
import { App as RemoteApp } from 'remote-app/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RemoteApp />
	</React.StrictMode>,
)
