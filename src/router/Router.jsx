import { Navigate, Route, Routes } from "react-router-dom";

// pages
import { Character, Characters, Comics, Creators, PageNotFound, Series } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/characters" />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/comics" element={<Comics />} />
      <Route path="/creators" element={<Creators />} />
      <Route path="/series" element={<Series />} />
      <Route path="/characters/:id" element={<Character />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
