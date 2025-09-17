import { AuthProvider } from './firebase/useAuth'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Hompage from './pages/Hompage'
import ProductPage from './products/ProductPage'
import AdminUser from './admin/AdminUser'
import { Provider } from 'react-redux';
import { store } from './store/store';
import ProductDetails from './products/ProductDetails'
import MyOrders from './user/MyOrders' 
import Checkout from './cart/Checkout'
import ProductList from './admin/ProductList'
import UserList from './admin/UserList'
import About from './pages/About'
import Contact from './pages/Contact'
import AddProductForm from './admin/AddProductForm'

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
            <Route path='/addProduct' element={<AddProductForm />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  )
}

export default App
