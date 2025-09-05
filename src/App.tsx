import { AuthProvider } from './auth/useAuth'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Hompage from './pages/Hompage'
import ProductPage from './pages/ProductPage'
import NavBar from './components/NavBar'
import AdminUser from './pages/AdminUser'

const App:React.FC = () => {
 

  return (
    <AuthProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Hompage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/admin' element={<AdminUser />} />
        </Routes>        
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
