import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

const CartPage = () => {
  // ดึงข้อมูลและฟังก์ชันจาก Store ตัวเดียวกับที่ใช้ใน Drawer
  const { cart, removeFromCart, addToCart, decreaseQuantity, clearCart } = useCartStore();

  // คำนวณยอดเงิน (Logic เดียวกันเป๊ะ)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.07;
  const shipping = subtotal > 0 ? 100 : 0;
  const total = subtotal + tax + shipping;

  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-10 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-700">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
        <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ส่วนรายการสินค้า (ทางซ้าย) */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b pb-6 last:border-0 last:pb-0">
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.category}</p>
                  <p className="text-blue-600 font-semibold mt-1">{item.price.toLocaleString()} THB</p>
                </div>
                
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                  {/* ปุ่มเพิ่ม-ลดจำนวน */}
                  <div className="flex items-center border rounded-lg">
                    <button 
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 hover:bg-gray-100 text-gray-600"
                    >-</button>
                    <span className="px-3 font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => addToCart(item)}
                      className="px-3 py-1 hover:bg-gray-100 text-gray-600"
                    >+</button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-gray-50 text-right">
             <button onClick={clearCart} className="text-red-600 text-sm hover:underline">Clear All Items</button>
          </div>
        </div>

        {/* ส่วนสรุปยอด (ทางขวา) */}
        <div className="bg-white p-6 rounded-lg shadow h-fit space-y-4">
          <h2 className="text-xl font-bold border-b pb-4">Order Summary</h2>
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>{subtotal.toLocaleString()} THB</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Tax (7%)</span>
            <span>{tax.toLocaleString(undefined, { maximumFractionDigits: 2 })} THB</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>{shipping.toLocaleString()} THB</span>
          </div>
          <div className="flex justify-between text-2xl font-bold border-t pt-4">
            <span>Total</span>
            <span>{total.toLocaleString(undefined, { maximumFractionDigits: 2 })} THB</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition mt-4">
            Proceed to Checkout
          </button>
          <Link to="/" className="block text-center text-gray-500 hover:text-gray-800 mt-2">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;