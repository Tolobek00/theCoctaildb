import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePages from "./Pages/HomePages";
import Popular from "./Components/PopularDrinks/Popular";
import Category from "./Components/Category/Category";
import "./App.css";
import "./App.scss";

function App() {
  return (
    <div className="Wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/category" element={<Category />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
