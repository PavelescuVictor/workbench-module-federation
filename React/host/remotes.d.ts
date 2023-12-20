// Declaring modules for the remote applications so typescript doesn't complain

// ==================================================
// First app module declaration
// ==================================================

declare module 'first-app/*' {
    export function SharedComponent1();
    export function SharedComponent2();
}

// Alternative module declaration
// declare module 'first-app/*' {
//     export * from '@first-app/*';
// }

// Individual module declaration per component
// declare module 'first-app/SharedComponent1' {
//     export * from '@first-app/SharedComponent1';
// }

// Individual module declaration per component
// declare module 'first-app/SharedComponent2' {
//     export * from '@first-app/SharedComponent2';
// }

// ==================================================
// Second app module delcaration
// ==================================================
declare module 'second-app/*' {
    export function SharedComponent3();
    export function SharedComponent4();
}

// Alternative module declaration
// declare module 'second-app/*' {
//     export * from '@second-app/*';
// }

// Individual module declaration per component
// declare module 'second-app/SharedComponent3' {
//     export * from '@second-app/SharedComponent3';
// }

// Individual module declaration per component
// declare module 'second-app/SharedComponent4' {
//     export * from '@second-app/SharedComponent4';
// }
