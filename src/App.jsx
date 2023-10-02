import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/HomePage";
import LifePage from "./pages/LifePage";
import HealthPage from "./pages/HealthPage";
import VehiclePage from "./pages/VehiclePage";
import Layout from "./components/Layout";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="life" element={<LifePage />} />
          <Route path="health" element={<HealthPage />} />
          <Route path="vehicle" element={<VehiclePage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
