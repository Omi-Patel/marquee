import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyShelf from "./components/MyShelf";

const App = () => {
  return (
    <div className="p-4">
      <Router future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myshelf" element={<MyShelf />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
