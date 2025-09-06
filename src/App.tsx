import { AuthProvider } from './auth/useAuth'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Hompage from './pages/Hompage'
import ProductPage from './pages/ProductPage'
import AdminUser from './pages/AdminUser'
import Login from './components/Login'

const App:React.FC = () => {
 

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hompage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/admin' element={<AdminUser />} />
          <Route path='/login' element={<Login />} />
        </Routes>        
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
