import { Routes, Route } from "react-router-dom"; // Remove BrowserRouter/Router import
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

export default function App() {
  return (
    <Routes>  {/* Routes is used here */}
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}