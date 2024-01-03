import { useContext } from 'react';
import { CartContext } from '../context/cart.context.jsx';

/**
 *  @param {object[]} products
 */
export function Products({ products }) {
  const { addOne, cartProducts } = useContext(CartContext);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 p-4 md:p-2 justify-center items-center">
      {products.map((prod) => {
        const productOrNull = cartProducts.find((cartProd) => cartProd.id === prod.id);

        return (
          <li key={prod.id}>
            <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg w-full aspect-square object-cover" src={prod.images[0]} alt={prod.title} />
              <div className="p-5 text-gray-900 dark:text-white">
                <h5 className="mb-2 text-2xl font-bold tracking-tight ">{prod.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${prod.price}</p>

                <p className="flex w-full items-center">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => addOne(prod)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>

                    <span className="sr-only">Add item</span>
                  </button>

                  {productOrNull && <span>Added to cart: {productOrNull.quantity}</span>}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
