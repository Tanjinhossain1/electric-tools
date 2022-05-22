
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Sheared/Footer';
import Navbar from './Pages/Sheared/Navbar';

function App() {
  return (
    <div>
     <Navbar />
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home />}></Route>
       <Route path='/login' element={<Login />}></Route>
       <Route path='/purchase/:id' element={<Purchase />}></Route>
       <Route path='/signUp' element={<SignUp />}></Route>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
