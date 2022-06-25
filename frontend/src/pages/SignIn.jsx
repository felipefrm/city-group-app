import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from 'flowbite-react'
import toast from "react-hot-toast";

import { useAuth } from "../contexts/auth";

import logoImg from '../assets/images/logo.png'

export function SignIn() {
  const { register, handleSubmit } = useForm();
  const { signIn, signed } = useAuth()

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (signed) navigate("/")
  }, [signed])

  const onSubmit = async (data) => {
    const credentials = {
      username: data.username,
      password: data.password
    }

    signIn(credentials, (success, err) => {
      if (err) {
        toast.error(err)
      }
      else {
        toast.success(success)
        navigate(from, { replace: true })
      }
    })
  };

  return (
    <div className="bg-slate-300 h-screen flex items-center justify-center">
      <div className="bg-slate-100 p-10 rounded-lg m-4">
        <img src={logoImg} alt="Economapas" className="max-w-md w-full" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 mt-6 items-center"
        >
          <div className="flex flex-col gap-2 w-[70%]">
            <TextInput
              id="username"
              type="text"
              placeholder="Usuário"
              required={true}
              {...register('username', { required: true })}
            />
            <TextInput
              id="password"
              type="password"
              placeholder="Senha"
              required={true}
              {...register('password', { required: true })}
            />
          </div>
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