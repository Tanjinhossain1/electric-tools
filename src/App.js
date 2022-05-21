
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Sheared/Footer';
import Navbar from './Pages/Sheared/Navbar';

function App() {
  return (
    <div>
     <Navbar />
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
