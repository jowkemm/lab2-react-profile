import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FormLayout from "./layouts/FormLayout";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Review from "./pages/Review";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
          {/* Redirect root URL to the application form */}
          <Route path="/" element={<Navigate to="/apply/step-1" replace />} />

          {/* Nested Route Configuration */}
          <Route path="/apply" element={<FormLayout />}>
            {/* Child Routes - They render inside <Outlet /> of FormLayout */}
            <Route path="step-1" element={<Step1 />} />
            <Route path="step-2" element={<Step2 />} />
            <Route path="review" element={<Review />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;