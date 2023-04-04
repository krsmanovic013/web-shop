import Home from "./routes/home";
import Navigation from "./routes/navigation";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return <h1>Im shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
