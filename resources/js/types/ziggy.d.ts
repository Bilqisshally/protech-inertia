declare global {
    interface Window {
        route: (name: string, params?: Record<string, any>) => string;
    }
}