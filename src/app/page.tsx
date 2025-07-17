import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import RaceDetails from '@/components/RaceDetails';
import RouteMap from '@/components/RouteMap';
import Rules from '@/components/Rules';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <RaceDetails />
      <RouteMap />
      <Rules />
      <Partners />
      <Footer />
    </div>
  );
}
