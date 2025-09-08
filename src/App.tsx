import { AuthProvider } from './firebase/useAuth'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Hompage from './pages/Hompage'
import ProductPage from './pages/ProductPage'
import AdminUser from './pages/AdminUser'
import Login from './components/Login'
import { Provider } from 'react-redux';
import { store } from './store/store';
import ShoppingCart from './pages/ShoppingCart';

const App: React.FC = () => {


  return (
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Hompage />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/admin' element={<AdminUser />} />
            <Route path='/login' element={<Login />} />
            <Route path='/shoppingcart' element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  )
}

export default App
