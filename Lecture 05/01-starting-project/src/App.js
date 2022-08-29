import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

import MainHeader from './components/MainHeader';

function App() {
  const navigate = useNavigate();

  navigate('/welcome', {replace: true})

  // useHistory();

  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to='/welcome' />} />
          <Route path="/welcome/*" element={<Welcome />} >
            <Route path='new-user' element={<p>Welcome to the page!</p>}/>
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


// localhost:3000/welcome => Welcome
// localhost:3000/products => Products 

// /products => GET
// /products => POST
// /products/:id => GET
// /products/:id => PATCH
// /products/:id => DELETE