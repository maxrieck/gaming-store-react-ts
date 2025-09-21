import { useState } from "react";
import { useAuth } from '../firebase/useAuth'
import styles from '../products/ProductPage.module.css'

interface LoginProps {
    onClose: () => void
}


const Login:React.FC<LoginProps> = ({ onClose }) => {

  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
    onClose()
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-zinc-900 p-5 w-150 h-100 shadow-lg relative border flex flex-col justify-center items-center">

       <button
          onClick={onClose}
          className="absolute top-2 right-2 px-2 text-white hover:text-zinc-900 hover:bg-zinc-600 hover:rounded-md"
          >
          X
       </button>

      <form 
        className="flex flex-col justify-center items-center p-5"
        onSubmit={handleSubmit}>

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button className={`${styles.addCartBtn}`} type="submit">Login</button>

        {error && <p>{error}</p>}

      </form>
      </div>
    </div>
  );

};

export default Login;