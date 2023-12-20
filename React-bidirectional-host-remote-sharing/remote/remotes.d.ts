// Declaring modules for the remote applications so typescript doesn't complain

// ==================================================
// First app module declaration
// ==================================================

declare module 'host-app/*' {
    export function HostComponent();
}

// Alternative module declaration
// declare module 'host-app/*' {
//     export * from '@host-app/*';
// }

// Individual module declaration per component
// declare module 'host-app/HostComponent' {
//     export * from '@host-app/HostComponent';
// }