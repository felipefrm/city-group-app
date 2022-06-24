import logoImg from '../assets/images/logo.png'

export function SignIn() {
  const handleSignIn = () => {
    console.log('signin')
  }

  return (
    <div className="bg-slate-300 h-screen flex items-center justify-center">
      <div className="bg-slate-100 p-10 rounded-lg">
        <img src={logoImg} alt="Economapas" className="max-w-md" />
        <form className="flex flex-col gap-2 mt-6 items-center">
          <Input type="text" name="username" placeholder="Usuário" />
          <Input type="password" name="password" placeholder="Senha" />

          <button
            type="button"
            className="bg-brand-blue text-white font-bold mt-4 px-6 py-2 rounded-md hover:opacity-60 transition-opacity"
            onClick={handleSignIn}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}

function Input({ ...rest }) {
  return (
    <input {...rest} className="w-[70%] h-10 pl-6" />
  )
}