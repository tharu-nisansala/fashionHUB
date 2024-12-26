function Cart({ cart, onRemove }) {
  return (
    <div className="container mx-auto p-6 mt-40">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <p className="text-xl font-semibold text-gray-800">
              Total: $
              {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </p>
            <button className="mt-4 px-6 py-3 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
