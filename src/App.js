
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Sheared/Footer';
import Navbar from './Pages/Sheared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import Payment from './Pages/Dashboard/Payment';
import AddReview from './Pages/Home/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import MakeAdmin from './Pages/Dashboard/MyProfile/Admin/MakeAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import useFindAdmin from './Pages/hooks/useFindAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import Blog from './Pages/Blog/Blog';
import MyPortfolio from './Pages/MyProtfolio/MyPortfolio';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import UpdateProduct from './Pages/Tools/UpdateProduct';

function App() {
  const user = useAuthState(auth)
  const [admin] = useFindAdmin(user);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase /></RequireAuth>}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/updateProduct/:id' element={<RequireAdmin><UpdateProduct /></RequireAdmin>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio />}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          {
            admin && <Route index element={<MyProfile />}></Route>
          }
          {
            !admin && <Route index element={<MyProfile />}></Route>
          }
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProduct /></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path='manageOrders' element={<RequireAdmin><ManageOrders /></RequireAdmin>}></Route>
          <Route path='myOrders' element={<MyOrders />}></Route>
          <Route path='addReview' element={<AddReview />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
