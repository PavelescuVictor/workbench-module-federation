import './App.css'

// Static import of modules from remote applications
import { SharedComponent1 } from 'first-app/SharedComponent1';

const App = () => {
	return <div className="host-app">
		<h1>Host Application</h1>
		<SharedComponent1 />
	</div>
}

export default App
