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
  );
}

export default App;
