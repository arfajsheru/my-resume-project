import Home from "./pages/Home";
import Contact from "./pages/contact";
import Work from "./pages/work";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Home />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
