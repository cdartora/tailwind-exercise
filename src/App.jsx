import { useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Headliners from "./components/Headliners";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <div onClick={toggleTheme} className={isDarkTheme ? "dark" : ""}>
      <main className="App bg-zinc-100 dark:bg-zinc-900">
        <header className="text-zinc-200">
          <ThemeButton />
          <NavBar />
          <HeroSection />
        </header>
        <Headliners />
      </main>
    </div>
  );
}

export default App;
