import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    // Sends both the variable 'darkMode' and the function 'toggleTheme' to all children
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {/* This div controls the class for the whole app */}
      <div className={darkMode ? "dark" : ""}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom Hook to make using the context easier
export const useTheme = () => useContext(ThemeContext);