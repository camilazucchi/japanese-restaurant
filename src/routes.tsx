import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// BrowserRouter is a router that routes requests and responses to different routes.
import Navbar from 'components/Navbar';
import StandardPage from 'components/StandardPage';
import Index from 'pages/Index';
import Menu from 'pages/Menu';
import About from 'pages/About';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Dishes from 'pages/Dishes';

export default function AppRouter() {
  return (
    <main className='container'>
      {/* Nested Routes */}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<StandardPage />}>
            <Route index element={<Index />} />
            <Route path='menu' element={<Menu />} />
            <Route path='about-us' element={<About />} />
          </Route>
          <Route path='dishes/:id' element={<Dishes />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}