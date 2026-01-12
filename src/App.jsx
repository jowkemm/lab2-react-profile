import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* MainLayout acts as the parent wrapper */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;