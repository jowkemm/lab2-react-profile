import { useCartStore } from "../store/useCartStore";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart, addToCart, decreaseQuantity } = useCartStore();

  // Derived State Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.07; // 7% Tax
  const shipping = subtotal > 0 ? 100 : 0; // Shipping is 0 if cart is empty
  const total = subtotal + tax + shipping;

  return (
    <>
      {/* Overlay Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-xl">
              ✕
            </button>
          </div>

          {/* Cart Items Area */}
          <div className="flex-1 overflow-y-auto space-y-4">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500 mt-10">Cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.price} x {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => decreaseQuantity(item.id)} className="px-2 bg-gray-200 rounded">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)} className="px-2 bg-gray-200 rounded">+</button>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 ml-2 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary Section */}
          {cart.length > 0 && (
            <div className="border-t pt-4 mt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{subtotal.toLocaleString()} THB</span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm">
                <span>Tax (7%)</span>
                <span>{tax.toFixed(2)} THB</span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm">
                <span>Shipping</span>
                <span>{shipping} THB</span>
              </div>
              <div className="flex justify-between font-bold text-xl mt-2 border-t pt-2">
                <span>Total</span>
                <span>{total.toFixed(2)} THB</span>
              </div>

              <button 
                onClick={clearCart}
                className="w-full mt-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
              >
                Clear Cart
              </button>
              <button className="w-full mt-2 py-3 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;