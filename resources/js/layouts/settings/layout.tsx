import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';

interface SettingsLayoutProps extends PropsWithChildren {
  title: string;
  description?: string;
}

export default function SettingsLayout({ children, title, description }: SettingsLayoutProps) {
  const { url } = usePage(); // ambil url sekarang untuk cek active link

  const sidebarNavItems: (NavItem & { name: string })[] = [
    {
      title: 'Profile',
      href: '/profile/edit', // sesuaikan route kamu
      name: 'profile.edit',
      icon: null,
    },
    {
      title: 'Password',
      href: '/password/edit', // sesuaikan route kamu
      name: 'password.edit',
      icon: null,
    },
  ];

  return (
    <div className="space-y-6 p-6 lg:p-10 pb-16 lg:pb-16">
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        <Button variant="outline" asChild>
          <Link href="/">Back</Link>
        </Button>
      </div>

      <Separator />

      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        {/* Sidebar */}
        <aside className="-mx-4 lg:w-1/5">
          <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
            {sidebarNavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted',
                  url === item.href ? 'bg-muted' : 'text-muted-foreground'
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Konten utama */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
