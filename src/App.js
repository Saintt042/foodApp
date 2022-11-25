import { Routes, Route, } from 'react-router-dom';
import Cart from './Cart/Cart';
import Home from './HomePage/Home';
import Layout from './Layout/Layout';
import Menu from './MenuPage/Menu';
import NotFound from './NotFound/NotFound';


function App() {
  return (
    <Routes> 
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/Menu' element={<Menu />} />
      </Route>
     </Routes>
  );
}

export default App;
