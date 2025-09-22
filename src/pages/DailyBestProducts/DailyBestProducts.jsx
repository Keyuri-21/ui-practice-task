import MainContainer from '../../components/MainContainer/MainContainer';
import DailyBest from '../../components/DailyBest/DailyBest';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const DailyBestPage = () => {
    return (
        <MainContainer>
            <Header />
            <div style={{marginTop: '20px'}}>
                <DailyBest showAll={true} />
            </div>
            <Footer />
        </MainContainer>
    );
};

export default DailyBestPage;
