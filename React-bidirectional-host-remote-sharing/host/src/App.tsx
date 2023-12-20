import './App.css'

// Static import of modules from remote application
import { RemoteComponent } from 'remote-app/RemoteComponent';

const App = () => {
	return <div className="host-app">
		<h1>Host Application</h1>
		<RemoteComponent />
	</div>
}

export default App
