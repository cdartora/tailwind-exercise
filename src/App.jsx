import { useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Headliners from "./components/Headliners";
import ThemeButton from "./components/ThemeButton";
import Tickets from "./components/Tickets";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <div className={isDarkTheme ? "dark" : ""}>
      <main className="App bg-zinc-100 dark:bg-zinc-900">
        <header className="text-zinc-200">
          <ThemeButton toggleTheme={toggleTheme} />
          <NavBar />
          <HeroSection />
        </header>
        <Headliners />
        <Tickets />
      </main>
    </div>
  );
}

export default App;
