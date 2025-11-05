'use client';

import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardLayoutProps {
  /** Child content to render in the main area */
  children: React.ReactNode;
  /** Props to pass to the Sidebar component */
  sidebarProps?: React.ComponentProps<typeof Sidebar>;
  /** Props to pass to the Header component */
  headerProps?: React.ComponentProps<typeof Header>;
  /** Whether to show the sidebar */
  showSidebar?: boolean;
  /** Whether to show the header */
  showHeader?: boolean;
}

/**
 * DashboardLayout Component
 * 
 * A complete dashboard layout wrapper that combines Sidebar, Header, and main content area.
 * This component provides a responsive layout structure with a collapsible sidebar on mobile.
 * 
 * @example
 * ```tsx
 * <DashboardLayout
 *   sidebarProps={{
 *     logo: <Logo />,
 *     navigationItems: [
 *       { id: 'home', label: 'Home', href: '/' },
 *       { id: 'analytics', label: 'Analytics', href: '/analytics' }
 *     ]
 *   }}
 *   headerProps={{
 *     title: "Dashboard",
 *     showSearch: true
 *   }}
 * >
 *   <YourContent />
 * </DashboardLayout>
 * ```
 */
export default function DashboardLayout({
  children,
  sidebarProps,
  headerProps,
  showSidebar = true,
  showHeader = true,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* Sidebar */}
      {showSidebar && <Sidebar {...sidebarProps} />}

      {/* Main content area */}
      <div
        className={`${
          showSidebar ? 'md:ml-64' : ''
        } flex flex-col min-h-screen`}
      >
        {/* Header */}
        {showHeader && <Header {...headerProps} />}

        {/* Main content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
