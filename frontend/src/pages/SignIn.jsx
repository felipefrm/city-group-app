import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/auth";

import logoImg from '../assets/images/logo.png'

export function SignIn() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useAuth()

  const onSubmit = async (data) => {
    signIn({ 
      username: data.username, 
      password: data.password 
    })
  };

  return (
    <div className="bg-slate-300 h-screen flex items-center justify-center">
      <div className="bg-slate-100 p-10 rounded-lg">
        <img src={logoImg} alt="Economapas" className="max-w-md" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 mt-6 items-center"
        >
          <input
            type="text"
            name="username"
            placeholder="Usuário"
            className="w-[70%] h-10 pl-6"
            {...register('username', { required: true })}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            className="w-[70%] h-10 pl-6"
            {...register('password', { required: true })}
          />
          <button
            type="submit"
            className="bg-brand-blue text-white font-bold mt-4 px-6 py-2 rounded-md hover:opacity-60 transition-opacity"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}