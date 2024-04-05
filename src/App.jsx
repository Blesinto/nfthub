import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Brand from './components/Brand';
import Collections from './components/Collections';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Works from './components/Works';
import Choose from './components/Choose';
import { Members } from './components/Members';
import Subscribe from './components/Subscribe';
import Roadmap from './components/Roadmap';
import Meet from './components/Meet';
import Faq from './components/Faq';
import Mint from './components/Mint';
import Footer from './components/Footer';


const App = () => (
  <div>
    <Navbar />
    <HeroSection />
    <Brand />
    <Collections />
    <Choose />
    <Members />
    <Works />
    <Subscribe />
    <Roadmap />
    <Meet />
    <Faq/>
    <Mint/>
    <Footer/>
  </div>
);

export default App;
