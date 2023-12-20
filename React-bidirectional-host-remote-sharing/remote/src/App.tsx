import './App.css'

// Static import of modules from host application
import { HostComponent } from 'host-app/HostComponent';

const App = () => {
	return <div className="remote-app">
		<h1>Remote Application</h1>
		<HostComponent />
	</div>
}

export default App
