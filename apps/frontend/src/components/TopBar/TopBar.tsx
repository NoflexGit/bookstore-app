import { ShoppingBagIcon } from '@heroicons/react/solid';
import Logo from '../shared/Logo';

/* eslint-disable-next-line */
export interface TopBarProps {}

export function TopBar() {
  return (
    <section className="fixed z-50 h-14 w-full bg-indigo-600">
      <div className="container mx-auto flex h-full items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-12">
          <nav className="flex items-center">
            <ul className="flex space-x-10 text-sm leading-none">
              <li className="text-white">Catalog</li>
              <li className="text-white">New 2022</li>
              <li className="text-white">Gifts</li>
              <li className="text-white">Blog</li>
            </ul>
          </nav>
          <div className="relative flex space-x-2 rounded-lg bg-pink-500 p-2 text-xs text-white">
            <ShoppingBagIcon className="h-5 w-5" />
            <div className="text-[xs] absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-pink-600 shadow-md">
              0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBar;
