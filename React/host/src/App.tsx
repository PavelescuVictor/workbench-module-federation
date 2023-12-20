import './App.css'

// Static import of modules from remote applications
import { SharedComponent1 } from 'first-app/SharedComponent1';
import { SharedComponent2 } from 'first-app/SharedComponent2';

import { SharedComponent3 } from 'second-app/SharedComponent3';
import { SharedComponent4 } from 'second-app/SharedComponent4';

// Lazy importing same remote applications resources
// export type ExposeModuleType = React.ComponentType<unknown>;
// export type LazyImportModuleType = React.LazyExoticComponent<ExposeModuleType>;
// export type LazyImportModuleArrayType = Array<LazyImportModuleType>;

// const SharedComponent1 = 'first-app/SharedComponent1';
// const SharedComponent2 = 'second-app/SharedComponent2';
// const SharedComponent3 = 'first-app/SharedComponent3';
// const SharedComponent4 = 'second-app/SharedComponent4';

// const getAllRemotes = async () => {
// 	// Resolve all imports befofe proceeding
// 	const remotes = await Promise.all([
// 		// List of remote apps modules to import
// 		React.lazy(() => import(SharedComponent1)),
// 		React.lazy(() => import(SharedComponent2)),
// 		React.lazy(() => import(SharedComponent3)),
// 		React.lazy(() => import(SharedComponent4)),
// 	]) as unknown as Promise<LazyImportModuleArrayType>

// 	return remotes;
// }
// const rem =  await getAllRemotes();
// const [
// 	LazyImportedSharedComponent1, 
// 	LazyImportedSharedComponent2,
// 	LazyImportedSharedComponent3, 
// 	LazyImportedSharedComponent4
// ] = rem;

// const FristAppModule = 'first-app';
// const FirstApp = React.lazy(() => import(RemoteAppModule));
// const SharedComponent1 = React.lazy(() => import('first-app/SharedComponent1'));
// const SharedComponent2 = React.lazy(() => import('first-app/SharedComponent2'));

// const SecondAppModule = 'second-app';
// const SecondApp = React.lazy(() => import(RemoteAppModule));
// const SharedComponent3 = React.lazy(() => import('first-app/SharedComponent1'));
// const SharedComponent4 = React.lazy(() => import('first-app/SharedComponent2'));

const App = () => {
	return <div className="host-app">
		<h1>Host Application</h1>
		<SharedComponent1 />
		<SharedComponent2 />
		<SharedComponent3 />
		<SharedComponent4 />
	</div>
}

export default App
