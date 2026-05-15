import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { Stats } from './components/Stats.jsx';
import { About } from './components/About.jsx';
import { FoodCategories } from './components/FoodCategories.jsx';
import { Drinks } from './components/Drinks.jsx';
import { TourDates } from './components/TourDates.jsx';
import { Gallery } from './components/Gallery.jsx';
import { ExhibitorCTA } from './components/ExhibitorCTA.jsx';
import { Footer } from './components/Footer.jsx';
import { useReveal } from './hooks/useReveal.js';

export default function App() {
  useReveal();

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <FoodCategories />
        <Drinks />
        <TourDates />
        <Gallery />
        <ExhibitorCTA />
      </main>
      <Footer />
    </>
  );
}
