import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* หน้าแรก แสดง Catalog */}
        <Route path="/" element={<Catalog />} />
        
        {/* หน้า ProductDetail รับค่า Dynamic ID */}
        {/* ต้องมี :id เพื่อบอกว่าเป็นตัวแปร */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;