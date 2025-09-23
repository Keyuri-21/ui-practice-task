import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Banner from './components/Banner/Banner';
import DailyBest from './components/DailyBest/DailyBest';
import Footer from './components/Footer/Footer';
import MainContainer from './components/MainContainer/MainContainer';
import PromotionalSection from './components/PromotionalSection/PromotionalSection';
import Rectangle1 from './components/Rectangle-1/Rectangle-1';
import Services from './components/Services/Services';
import TopCategory from './components/TopCategory/TopCategory';
import Cart from './pages/Cart/Cart';
import DailyBestPage from "./pages/DailyBestProducts/DailyBestProducts";
import Notification from "./components/Notification/Notification";

function App() {
  return (
    <Router>
      <Notification/>
      <Routes>
        <Route
          path="/"
          element={
            <MainContainer>
              <Rectangle1 />
              <Services />
              <PromotionalSection />
              <TopCategory />
              <Banner />
              <DailyBest />
              <Footer />
            </MainContainer>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dailybest" element={<DailyBestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
