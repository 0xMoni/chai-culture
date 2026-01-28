import Header from './components/Header';
import Hero from './components/Hero';
import OrnamentalDivider from './components/OrnamentalDivider';
import ChaiQuote from './components/ChaiQuote';
import EmailSignup from './components/EmailSignup';
import SocialIcons from './components/SocialIcons';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <OrnamentalDivider />
        <ChaiQuote />
        <OrnamentalDivider />
        <EmailSignup />
        <SocialIcons />
      </main>
      <Footer />
    </div>
  );
}

export default App;
