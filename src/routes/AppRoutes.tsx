import { Routes, Route } from "react-router-dom";
import Main from "../layout/Main/index";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
