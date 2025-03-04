import { Route, Routes } from "react-router";
import { Doc } from "../pages/Doc";
import { Home } from "../pages/Home";

export function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doc" element={<Doc />} />
      </Routes>
    </>
  );
}