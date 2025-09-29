import Collab from "./components/Collab";
import Footer from "./components/Footer";
import Review from "./components/Review";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-gradient-to-br from-[#050219] via-black to-[#4d2707db]">
      <Home/>
      <Collab/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
