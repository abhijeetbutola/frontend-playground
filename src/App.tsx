import { Route, Routes } from "react-router-dom";
import "./App.css";
import HotstarCardSlider from "./pages/hotstar-card-slider";
import Home from "./pages/homepage";
import Layout from "./components/layout";
import NotFound from "./pages/notfoundpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/hotstar-card-slider" element={<HotstarCardSlider />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
