import Banner from './components/Banner/Banner';
import DailyBest from './components/DailyBest/DailyBest';
import Footer from './components/Footer/Footer';
import MainContainer from './components/MainContainer/MainContainer';
import PromotionalSection from './components/PromotionalSection/PromotionalSection';
import Rectangle1 from './components/Rectangle-1/Rectangle-1';
import Services from './components/Services/Services';
import TopCategory from './components/TopCategory/TopCategory';

function App() {
  return (
    <MainContainer>
      <Rectangle1/>
      <Services/>
      <PromotionalSection />
      <TopCategory />
      <Banner/>
      <DailyBest/>
      <Footer/>
    </MainContainer>
  );
}

export default App;