import { Route, Routes } from "react-router-dom";

// pages
import { Home } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
