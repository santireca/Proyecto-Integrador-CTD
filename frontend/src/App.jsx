import Header from "./components/Header";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="flex h-[100vh] flex-col justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
("");
