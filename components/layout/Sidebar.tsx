'use client';

import { useState } from 'react';

interface SidebarProps {
  /** Custom navigation items to display in the sidebar */
  navigationItems?: Array<{
    id: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
  }>;
  /** Logo component or text to display at the top of the sidebar */
  logo?: React.ReactNode;
  /** Footer content to display at the bottom of the sidebar */
  footer?: React.ReactNode;
  /** Whether the sidebar is collapsed on mobile by default */
  defaultCollapsed?: boolean;
}

/**
 * Sidebar Component
 * 
 * A generic, reusable sidebar for dashboard layouts.
 * 
 * @example
 * ```tsx
 * <Sidebar
 *   logo={<img src="/logo.png" alt="My App" />}
 *   navigationItems={[
 *     { id: 'home', label: 'Home', href: '/' },
 *     { id: 'settings', label: 'Settings', href: '/settings' }
 *   ]}
 * />
 * ```
 */
export default function Sidebar({
  navigationItems = [],
  logo,
  footer,
  defaultCollapsed = false,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-zinc-800 shadow-lg md:hidden"
        aria-label="Toggle sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isCollapsed ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen transition-transform duration-300
          ${isCollapsed ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}
          w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo section */}
          <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
            {logo || (
              <div className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Dashboard
              </div>
            )}
          </div>

          {/* Navigation section */}
          <nav className="flex-1 overflow-y-auto p-4">
            {navigationItems.length > 0 ? (
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-sm text-zinc-500 dark:text-zinc-400 p-4">
                <p className="mb-2">No navigation items configured.</p>
                <p className="text-xs">
                  Pass navigationItems prop to customize this sidebar.
                </p>
              </div>
            )}
          </nav>

          {/* Footer section */}
          {footer && (
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
              {footer}
            </div>
          )}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}
    </>
  );
}
