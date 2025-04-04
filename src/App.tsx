import { Route, Routes } from "react-router-dom";
import "./App.css";
import HotstarCardSlider from "./pages/hotstar-card-slider";
import Home from "./pages/home-page";
import Layout from "./components/layout";
import NotFound from "./pages/not-found-page";
import GridLightsPage from "./pages/grid-lights-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/hotstar-card-slider" element={<HotstarCardSlider />} />
          <Route path="/grid-lights-page" element={<GridLightsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
