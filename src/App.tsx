import { AuthProvider } from './auth/useAuth'
import AddProductForm from './components/AddProductForm'
import ProductList from './components/ProductList'
import RegistrationForm from './components/RegistrationForm'
import UserList from './components/UserList'

const App:React.FC = () => {
 

  return (
    <AuthProvider>
      <RegistrationForm />
      <AddProductForm />
      <UserList />
      <ProductList />
    </AuthProvider>
  )
}

export default App
