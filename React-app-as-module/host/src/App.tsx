import './App.css'

// Static import of modules from remote applications
import { SharedComponent } from 'remote-app/SharedComponent';

const App = () => {
	return <div className="host-app">
		<h1>Host Application</h1>
		<SharedComponent />
	</div>
}

export default App
