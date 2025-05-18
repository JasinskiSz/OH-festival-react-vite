import './App.css';
import "../FlexClasses.css";
import PageNav from "../layout/page-nav/PageNav";
import HeroButton from '../components/hero-button/HeroButton';

function App() {
  const imagePath = ["/banana.png", "/abstract.png"];

  return (
    <>
      <header className="flex-column flex-center-cross">
        <PageNav />
      </header>
      <main className="flex-center-main column flex-grow-1">
        <div className="flex-center-cross">
          <div id="left-black-disk" className="flex-column flex-center-main flex-grow-1 black-disk">
            <img src={imagePath[0]} alt="banana" id="banana" />
          </div>
          <div id="gdynia-disk" className="flex-column flex-center flex-grow-1">
            <HeroButton text="Gdynia" direction="right" colorHash="#1F0812" />
          </div>
          <div id="gdansk-disk" className="flex-column flex-center flex-grow-1">
            <HeroButton text="Gdańsk" direction="left" colorHash="#FBFDFF" />
          </div>
          <div id="right-black-disk" className="flex-column flex-center-main flex-grow-1 black-disk">
            <img src={imagePath[1]} alt="abstract-image" id="abstract" />
          </div>
        </div>
      </main>

    </>
  )
}

export default App
