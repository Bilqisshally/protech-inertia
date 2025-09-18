import { type BreadcrumbItem } from '@/types';
import { useRoute } from 'ziggy-js';

const route = useRoute();

// Map route names to breadcrumb info
const breadcrumbMap: Record<string, { title: string; href: string | ((params: Record<string, any>) => string) }> = {
    dashboard: { title: 'Dashboard', href: (params) => route('dashboard') },
    users: { title: 'Users', href: (params) => route('users.index') },
    'users.show': {
        title: 'User Details',
        href: (params) => route('users.show', { id: params.id }),
    },
    settings: { title: 'Settings', href: (params) => route('settings') },
};

/**
 * Generate breadcrumb trail based on current route
 */
export function useBreadcrumbs(): BreadcrumbItem[] {
    const route = useRoute();
    const currentRoute = route().current();
    const params = route().params;

    if (!currentRoute) return [];

    const segments = currentRoute.split('.');
    const breadcrumbs: BreadcrumbItem[] = [];

    let path = '';
    segments.forEach((segment, i) => {
        path = i === 0 ? segment : `${path}.${segment}`;
        const item = breadcrumbMap[path];

        if (item) {
            breadcrumbs.push({
                title: typeof item.title === 'function' ? item.title : item.title,
                href: typeof item.href === 'function' ? item.href(params) : item.href,
            });
        }
    });

    return breadcrumbs;
}
