import React, { useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import AppContextProvider, { AppContext } from './context/AppContext';
import MyOrders from './pages/MyOrders';
import Auth from './models/Auth';
import ProductCategory from './pages/ProductCategory';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import AddAddress from './pages/AddAddress';
import SellerLayout from './pages/seller/SellerLayout';
import AddProduct from './pages/seller/AddProduct';
import ProductList from './pages/seller/ProductList';
import SellerLogin from './components/seller/SellerLogin';
import Orders from './pages/seller/Orders';

const App = () => {
  const isSellerPath = useLocation().pathname.includes('seller');

  return (
    <AppContextProvider>
      <AppContent isSellerPath={isSellerPath} />
    </AppContextProvider>
  );
};

const AppContent = ({ isSellerPath }) => {
  const { showUserLogin , isSeller , sellerLoading } = useContext(AppContext);

  return (
    <>
    <div className='text-default min-h-screen'>
      {!isSellerPath && <Navbar />}
      {showUserLogin && <Auth />}
      <Toaster/>
      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:category/:id' element={<ProductDetails />} />
          <Route path='/products/:category' element={<ProductCategory />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/my-orders' element={<MyOrders />} />
          <Route path='/add-address' element={<AddAddress/>} />

          <Route
                path="/seller"
                element={
                  sellerLoading ? (
                    <p className="text-center p-8">Checking Seller Auth...</p>
                  ) : isSeller ? 
                  (<SellerLayout />) :
                   (<SellerLogin />)
                }
          >
            <Route index element={isSeller ? <AddProduct /> : null} />
            <Route
              path="product-list"
              element={isSeller ? <ProductList/> : null}
            />
            <Route path="orders" element={isSeller ? <Orders /> : null} />
          </Route>
        </Routes>
      </div>
      {isSellerPath ? null : <Footer/>}
    </div>
    </>
  );
};

export default App;
