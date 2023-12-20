// Declaring modules for the remote applications so typescript doesn't complain

// ==================================================
// First app module declaration
// ==================================================

declare module 'first-app/*' {
    export function SharedComponent1();
}

// Alternative module declaration
// declare module 'first-app/*' {
//     export * from '@first-app/*';
// }

// Individual module declaration per component
// declare module 'first-app/SharedComponent1' {
//     export * from '@first-app/SharedComponent1';
// }