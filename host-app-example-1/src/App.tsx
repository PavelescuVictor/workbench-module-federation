import './App.css'

// Static import of modules from remote applications
import { SharedComponentExample1 } from 'remote_app_1/Shared-component-example-1';
import { SharedComponentExample2 } from 'remote_app_1/Shared-component-example-2';

import { SharedComponentExample3 } from 'remote_app_2/Shared-component-example-3';
import { SharedComponentExample4 } from 'remote_app_2/Shared-component-example-4';

// Lazy importing same remote applications resources
// export type ExposeModuleType = React.ComponentType<unknown>;
// export type LazyImportModuleType = React.LazyExoticComponent<ExposeModuleType>;
// export type LazyImportModuleArrayType = Array<LazyImportModuleType>;

// const RemoteAppExample1 = 'remote_app_1/Shared-component-example-1';
// const RemoteAppExample2 = 'remote_app_2/Shared-component-example-2';
// const getAllRemotes = async () => {
// 	// Resolve all imports befofe proceeding
// 	const remotes = await Promise.all([
// 		// List of remote apps modules to import
// 		React.lazy(() => import(RemoteAppExample1)),
// 		React.lazy(() => import(RemoteAppExample2)),
// 	]) as unknown as Promise<LazyImportModuleArrayType>

// 	return remotes;
// }
// const rem =  await getAllRemotes();
// const [LazyImportedSharedComponentExample1, LazyImportedSharedComponentExample2] = rem;

// const RemoteAppModule = 'remote_app_1';
// const RemoteApp1 = React.lazy(() => import(RemoteAppModule));
// const RemoteApp1SharedComponent1 = React.lazy(() => import('remote_app_1/Shared-component-example-2'));
// const RemoteApp1SharedComponent2 = React.lazy(() => import('remote_app_1/Shared-component-example-2'));

const App = () => {
	return <div className="host-app-1">
		<h1>Host Application Example 1</h1>
		<SharedComponentExample1 />
		<SharedComponentExample2 />
		<SharedComponentExample3 />
		<SharedComponentExample4 />
	</div>
}

export default App
