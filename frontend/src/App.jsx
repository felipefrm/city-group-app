import { Toaster } from 'react-hot-toast';
import { AuthProvider } from "./contexts/auth"
import { Routes } from "./routes"

function App() {
  return (
    <AuthProvider>
      <Toaster />
      <Routes />
    </AuthProvider>
  )
}

export default App
