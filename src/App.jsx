import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Headliners from "./components/Headliners";

function App() {
  return (
    <main className="App">
      <header className="text-zinc-200">
        <NavBar />
        <HeroSection />
      </header>
      <Headliners />
    </main>
  );
}

export default App;
