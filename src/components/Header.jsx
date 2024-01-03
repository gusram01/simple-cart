import { Filters } from './Filters.jsx';

export function Header() {
  return (
    <header>
      <h1 className="text-xl text-center">GusRam Shop</h1>

      <Filters />
    </header>
  );
}
