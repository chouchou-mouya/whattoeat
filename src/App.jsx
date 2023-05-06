import { useState } from "react";
import "@/utils/fontawsome";
import "./assets/CSS/App.css";
import Home from "./views/Home.jsx";
import Layout from "./views/Layout.jsx";
import FoodList from "./views/FoodList.jsx";
import NoMatch from "./views/NoMatch";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="food_list" element={<FoodList />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
    // <Routes>
    //   <Route path="/about" element={<About />} />
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
    //     <Route path="dashboard" element={<Dashboard />} />
    //     <Route path="user" element={<User />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
