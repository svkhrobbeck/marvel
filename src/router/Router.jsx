import { Route, Routes } from "react-router-dom";

// pages
import { Characters, Home } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Characters />} />
    </Routes>
  );
};

export default Router;
