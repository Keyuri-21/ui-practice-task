import './MainContainer.scss';

const MainContainer = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default MainContainer;