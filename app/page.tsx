import DashboardLayout from '@/components/layout/DashboardLayout';

export default function Home() {
  // Example navigation items - customize these for your application
  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      href: '/',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: 'analytics',
      label: 'Analytics',
      href: '/analytics',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 'settings',
      label: 'Settings',
      href: '/settings',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <DashboardLayout
      sidebarProps={{
        navigationItems,
        logo: (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              D
            </div>
            <span className="text-xl font-bold">Dashboard</span>
          </div>
        ),
        footer: (
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            © 2024 Your Company
          </div>
        ),
      }}
      headerProps={{
        title: 'Welcome',
        showSearch: true,
        onSearchChange: (value) => console.log('Search:', value),
        actions: (
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            New Item
          </button>
        ),
      }}
    >
      {/* Main content area - customize this for your application */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Getting Started
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            This is a generic dashboard layout boilerplate. The layout includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
            <li>A responsive sidebar with customizable navigation items</li>
            <li>A top header with search, actions, and user section</li>
            <li>A flexible main content area</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
              Placeholder Card 1
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Replace this with your own content and components.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
              Placeholder Card 2
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Customize the sidebar, header, and content as needed.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
              Placeholder Card 3
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              See LAYOUT.md for documentation on how to extend.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
