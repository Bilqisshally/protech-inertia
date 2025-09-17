declare module 'ziggy-js' {
  const route: (name: string, params?: Record<string, unknown>, absolute?: boolean, config?: Record<string, unknown>) => string;
  export { route };
}
