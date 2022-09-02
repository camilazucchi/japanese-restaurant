import Navbar from 'components/Navbar';
import Index from 'pages/Index';
import Menu from 'pages/Menu';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// BrowserRouter is a router that routes requests and responses to different routes.

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/menu' element={<Menu />}/>
      </Routes>
    </Router>
  );
}