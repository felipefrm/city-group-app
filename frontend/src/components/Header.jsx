import { useAuth } from '../contexts/auth'

import logoImg from '../assets/images/logo.png'
import userImg from '../assets/images/default-user-image.png'

export function Header() {
  const { signOut } = useAuth()

  return (
    <header className="bg-slate-300 h-64">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <img src={logoImg} alt="Economapas" className="max-w-xs py-2" />
        <div className="flex mr-6 items-center">
          <div className="flex flex-col mr-2">
            <span className="font-bold">João</span>
            <button
              type="button"
              onClick={signOut}
              className="text-brand-green hover:underline hover:decoration-brand-green"
            >
              Sair
            </button>
          </div>
          <img
            src={userImg}
            alt="Avatar do Usuário"
            className="w-16 rounded-full border-brand-orange border-4"
          />
        </div>
      </div>
    </header>
  )
}