import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      {/* Other sections go here */}
    </div>
  );
}
export default App;
