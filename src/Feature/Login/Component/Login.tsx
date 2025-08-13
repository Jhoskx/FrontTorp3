import React from 'react'
import { Eye, EyeOff, Mail, Lock, User, Flashlight, Divide } from 'lucide-react';

interface LoginProps {
  email: string;
  password: string;
}
interface LoginErrors {
  email?: string;
  password?: string;
  general?: string;
}
const Login = () => {

  const [IsLoginMode, setIsLoginMode] = React.useState(true);
  const [formdata, setFormData] = React.useState<LoginProps>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = React.useState<LoginErrors>({});
  const [showPassword, setshowPassword] = React.useState(false);
  const [isloading, setIsLoading] = React.useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const Viewpassword = () => {
    setshowPassword(!showPassword);
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-300 flex items-center justify-center p-4'>
      <div className='bg-white rounded-2xl shadow-xl p-8 w-full max-w-md'>
        <div className='text-center mb-8'>
          <div className=' relative  w-40 h-40 rounded-full flex items-center justify-center overflow-hidden mx-auto mb-4'>
            <img src="/images/joyF.svg" alt="Logo" className=' absolute inset-0 w-full h-full object-cover' />
          </div>
          <h1 className='text-3xl font-roboto font-bold text-black mb-2'>
            {IsLoginMode ? 'Iniciar Sesión' : 'Registrarse'}
          </h1>
          <p className=' text-gray-600' >
            {IsLoginMode ? 'Accede a tu cuenta' : 'Crea una nueva cuenta'}
          </p>
        </div>

        <div className='space-y-6 '>
          <div className='space-y-2'>
            <label htmlFor="email" className='text-black text-sm font-roboto  pl-2'>Email</label>
            <div className='relative'>
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/50 w-5 h-5" />
              <input type="email" id="email" name="email"
                value={formdata.email} onChange={handleInputChange}
                placeholder='tu@email.com'
                className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-black placeholder-black/50 focus:outline-none focus:ring-2 transition-all ${errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-black/30 focus:ring-gray-500'
                  }`}
              />
            </div>
          </div>

          <div className='space-y-2'>
            <label htmlFor="password" className='text-black text-sm font-roboto pl-2'>Contraseña</label>
            <div className='relative'>
              <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-black/50 w-5 h-5' />
              <input type={showPassword ? 'text' : "password"} id="password" name="password"
                value={formdata.password} onChange={handleInputChange}
                placeholder='*********'
                className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-black placeholder-black/50 focus:outline-none focus:ring-2 transition-all ${errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-black/30 focus:ring-gray-500'
                  }`} />
              <button type='button'

                onClick={Viewpassword}
                className='absolute inset-y-0 right-0 pr-3 flex items-center text-black/60 hover:text-black transition-colors duration-200'>
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <button className='w-full  bg-black font-roboto font-medium  text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200	 py-3 px-4 rounded rounded-lg' type='button'>
            {isloading ?
              (<div className='flex items-center justify-center gap-2'>
                <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
             Iniciando sesión...
              </div>)
              : ("Inicio de Sesión")}
          </button>

        </div>
      </div>
    </div>

  )
}

export default Login