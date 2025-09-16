import { AuthProvider } from './firebase/useAuth'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Hompage from './pages/Hompage'
import ProductPage from './pages/ProductPage'
import AdminUser from './pages/AdminUser'
import { Provider } from 'react-redux';
import { store } from './store/store';
import ProductDetails from './pages/ProductDetails'
import MyOrders from './pages/MyOrders' 
import Checkout from './components/Checkout'
import ProductList from './components/ProductList'
import UserList from './components/UserList'
import About from './pages/About'
import Contact from './pages/Contact'

const App: React.FC = () => {


  return (
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Hompage />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/admin' element={<AdminUser />} />
            <Route path='/shoppingcart' element={<Checkout />} />
            <Route path='/productdetail/:id' element={<ProductDetails />}  />
            <Route path='/orders' element={<MyOrders />} />
            <Route path='/productList' element={<ProductList />} />
            <Route path='/userList' element={<UserList />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  )
}

export default App
