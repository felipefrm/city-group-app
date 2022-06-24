import { Home } from "./pages/Home"
import { SignIn } from "./pages/SignIn"

import { useAuth } from "./contexts/auth"

export function Routes() {
  const { signed } = useAuth()
  return signed ? <Home /> : <SignIn />
}