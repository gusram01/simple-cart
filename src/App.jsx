import { useState } from 'react';
import { Cart } from './components/Cart.jsx';
import { Header } from './components/Header.jsx';
import { Products } from './components/Products.jsx';
import { CartProvider } from './context/cart.context.jsx';
import { useFilters } from './hooks/use-filters.js';
import { products as rawProducts } from './products/local-products.db.json';

export function App() {
  const [products] = useState(rawProducts);
  const { changeFilters } = useFilters();

  return (
    <main>
      <CartProvider>
        <Cart />
        <Header />
        <Products products={changeFilters(products)} />
      </CartProvider>
    </main>
  );
}
