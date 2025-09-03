import { AuthProvider } from './auth/useAuth'
import AddProductForm from './components/AddProductForm'
import RegistrationForm from './components/RegistrationForm'

const App:React.FC = () => {
 

  return (
    <AuthProvider>
      <RegistrationForm />
      <AddProductForm />
    </AuthProvider>
  )
}

export default App
