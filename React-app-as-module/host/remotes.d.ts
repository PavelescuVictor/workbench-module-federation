// Declaring modules for the remote applications so typescript doesn't complain

// ==================================================
// First app module declaration
// ==================================================

declare module 'remote-app/*' {
    export function SharedComponent();
    export function App();
}

// Alternative module declaration
// declare module 'remote-app/*' {
//     export * from '@remote-app/*';
// }

// Individual module declaration per component
// declare module 'remote-app/SharedComponent' {
//     export * from '@remote-app/SharedComponent';
// }

// Individual module declaration per component
// declare module 'remote-app/App' {
//     export * from '@remote-app/App';
// }