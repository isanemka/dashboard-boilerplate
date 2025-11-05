'use client';

interface HeaderProps {
  /** Title to display in the header */
  title?: string;
  /** Custom actions/buttons to display on the right side of the header */
  actions?: React.ReactNode;
  /** User information to display (e.g., avatar, name, dropdown) */
  userSection?: React.ReactNode;
  /** Whether to show a search bar */
  showSearch?: boolean;
  /** Callback when search input changes */
  onSearchChange?: (value: string) => void;
}

/**
 * Header Component
 * 
 * A generic, reusable header/top navigation bar for dashboard layouts.
 * 
 * @example
 * ```tsx
 * <Header
 *   title="My Dashboard"
 *   actions={<button>New Item</button>}
 *   userSection={<UserMenu />}
 *   showSearch={true}
 * />
 * ```
 */
export default function Header({
  title,
  actions,
  userSection,
  showSearch = false,
  onSearchChange,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left section - Title */}
        <div className="flex items-center gap-4">
          {title && (
            <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {title}
            </h1>
          )}
        </div>

        {/* Center section - Search (optional) */}
        {showSearch && (
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="search"
                placeholder="Search..."
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {/* Right section - Actions and User */}
        <div className="flex items-center gap-4">
          {actions && <div className="flex items-center gap-2">{actions}</div>}
          
          {userSection || (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-sm font-medium text-zinc-600 dark:text-zinc-300">
                U
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
