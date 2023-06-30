import { Navigate, Route, Routes } from "react-router-dom";

// pages
import { Character, Characters } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/characters" />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/characters/:id" element={<Character />} />
    </Routes>
  );
};

export default Router;
