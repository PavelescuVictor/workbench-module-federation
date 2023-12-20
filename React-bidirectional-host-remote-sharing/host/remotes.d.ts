// Declaring modules for the remote applications so typescript doesn't complain

// ==================================================
// First app module declaration
// ==================================================

declare module 'remote-app/*' {
    export function RemoteComponent();
}

// Alternative module declaration
// declare module 'remote-app/*' {
//     export * from '@remote-app/*';
// }

// Individual module declaration per component
// declare module 'remote-app/RemoteComponent' {
//     export * from '@remote-app/RemoteComponent';
// }