import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Import Router
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import CartDrawer from "./components/CartDrawer";
import CartPage from "./pages/CartPage"; // Import หน้าใหม่
import { useCartStore } from "./store/useCartStore";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        
        {/* Navbar (แสดงผลทุกหน้า) */}
        <nav className="bg-white shadow-sm p-4 sticky top-0 z-30">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">MyShop</Link>
            
            <div className="flex gap-4 items-center">
               {/* ปุ่ม Link ไปหน้า Cart เต็มๆ */}
               <Link to="/cart" className="text-gray-600 hover:text-blue-600 font-medium">
                 View Full Cart
               </Link>

               {/* ปุ่มเปิด Drawer */}
               <button 
                 onClick={() => setIsDrawerOpen(true)}
                 className="relative p-2 hover:bg-gray-100 rounded-full"
               >
                 <span className="text-2xl">🛒</span>
                 {totalItems > 0 && (
                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                     {totalItems}
                   </span>
                 )}
               </button>
            </div>
          </div>
        </nav>

        {/* Routes Area (เปลี่ยนหน้าตรงนี้) */}
        <Routes>
          <Route path="/" element={
            <main className="max-w-6xl mx-auto p-6">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">New Arrivals</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </main>
          } />
          
          <Route path="/cart" element={<CartPage />} />
        </Routes>

        {/* Drawer (แสดงผลทับหน้าไหนก็ได้) */}
        <CartDrawer 
          isOpen={isDrawerOpen} 
          onClose={() => setIsDrawerOpen(false)} 
        />
        
      </div>
    </BrowserRouter>
  );
}

export default App;