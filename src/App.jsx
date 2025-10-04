import React from "react";
import { Toaster } from "react-hot-toast"; 

import Collab from "./components/Collab";
import Footer from "./components/Footer";
import Review from "./components/Review";
import Home from "./pages/Home";

function App() {
  return (
    <div className="relative bg-gradient-to-br from-[#050219] via-black to-[#4d2707db] text-white min-h-screen">
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#111827",
            color: "#fff",
            borderRadius: "10px",
            padding: "10px 16px",
            fontSize: "15px",
            fontWeight: "500",
          },
        }}
      />

      <Home />
      <Collab />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
