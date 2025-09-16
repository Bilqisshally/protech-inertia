type RouteParams =
    | Record<string, unknown>
    | string
    | number
    | (string | number)[];

declare global {
    interface Window {
        route: (name: string, params?: RouteParams) => string;
    }
}

// Type for route names
export type RouteName =
    | 'dashboard'
    | 'login'
    | 'register'
    | 'home'
    | 'products'
    | 'messages'
    | 'users'
    | 'settings'
    | 'logout';

// Type-safe route function that wraps Ziggy's route function
export function route(name: RouteName, params?: RouteParams): string {
    if (typeof window === 'undefined') {
        throw new Error('route() function must be called in browser context');
    }
    return window.route(name, params);
}
