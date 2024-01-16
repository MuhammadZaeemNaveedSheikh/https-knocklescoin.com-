import { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Wrapper from "./Components/Wrapper";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Navbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Wrapper activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Footer />
    </div>
  );
}

export default App;
