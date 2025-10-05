import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Collab from "./components/Collab";
import Footer from "./components/Footer";
import Review from "./components/Review";
import Home from "./pages/Home";
import VideoComp from "./components/VideoComp";

function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-gradient-to-br from-[#050219] via-black to-[#4d2707db] text-white min-h-screen">
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#042206",
              color: "#fff",
              borderRadius: "10px",
              padding: "10px 16px",
              fontSize: "15px",
              fontWeight: "500",
            },
          }}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Collab />
                <Review />
                <Footer />
              </>
            }
          />

          <Route path="/room/:roomID" element={<VideoComp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
