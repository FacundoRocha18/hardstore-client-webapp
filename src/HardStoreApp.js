import React, { useState, Suspense } from 'react';

/* React Router -------------------------------- */
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

/* Custom Hooks -------------------------------- */
import useFetchProducts from './hooks/useFetchProducts';
import useCart from './hooks/useCart';
import useAuth from './hooks/useAuth';

/* Components -------------------------------- */
import Header from './components/FixedComponents/PageHeader';
import HomePage from './components/HomePage';
import ShoppingCart from './components/ShoppingCartComponents/ShoppingCart';
import SingleProduct from './components/Products/SingleProduct';
import LoginScreen from './components/LoginComponents/LoginScreen';
import NoMatchPage from './components/NoMatchPage';
import Footer from './components/FixedComponents/PageFooter';




function App() {

  const { data: products, loading } = useFetchProducts();
  
  const { token, isAuth, onLogin, onLogout } = useAuth();

  const { cartItems, onAdd, onDelete, onRemove, onBuy } = useCart()

  console.log(isAuth)

  const [modalData, setModalData] = useState({
    success: null,
    info: [],
    total: 0
  });

  const modalContainer = document.querySelector('.modal-container');

  /* if (!token) {
    return <LoginScreen
      onLogin={onLogin}
    />
  } */

  return (

    <div className="App">

      <Router>

        <Header
          onLogout={onLogout}
          token={token}
        />

        <Routes>

          <Route exact path='/'
            element={
              <HomePage
                products={products}
                loading={loading}
                onAdd={onAdd}
              />
            }
          />

          <Route exact path='api/products/shoppingCart'
            element={
              (isAuth(token)) 
              ? 
              <ShoppingCart
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                onDelete={onDelete}
                onBuy={onBuy}
                modalContainer={modalContainer}
              />
              :
              <LoginScreen
                onLogin={onLogin}
              />
              
            }
          />

          <Route exact path='api/products/singleProduct/:id'
            element={
              <SingleProduct
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />

          <Route exact path='/api/auth/login'
            element={
              <LoginScreen
                onLogin={onLogin}
              />
            }
          />

          <Route path="*"
            element={
              <NoMatchPage />
            }
          />

        </Routes>

        <Footer />

      </Router>
    </div >
  );
}

export default App;
