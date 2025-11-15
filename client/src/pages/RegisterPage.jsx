import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerRequest } from "../api/auth.js";

function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const { signup, IsAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (IsAuthenticated) navigate("/tasks");
  }, [IsAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
  });

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-900'>
            
            {/* Contenedor del Formulario: Fondo oscuro, esquinas redondeadas, sombra sutil */}
            <div className='bg-zinc-800 max-w-lg w-full p-10 rounded-xl shadow-2xl'>
                
                {/* Título Estilizado */}
                <h1 className='text-3xl font-bold text-white text-center mb-8 tracking-wide'>
                    Crea tu Cuenta
                </h1>

                <form onSubmit={onSubmit} className='space-y-4'>
                    
                    {/* Input de Nombre de Usuario */}
                    <input 
                        type="text"
                        {...register("name", {required:true})}
                        className='w-full bg-zinc-700 text-white px-4 py-3 rounded-lg border border-zinc-700 
                                   placeholder-zinc-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300'
                        placeholder='Nombre de usuario' 
                    />
                    
                    {/* Input de Correo Electrónico */}
                    <input 
                        type="email"
                        {...register("email", {required:true})}
                        className='w-full bg-zinc-700 text-white px-4 py-3 rounded-lg border border-zinc-700 
                                   placeholder-zinc-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300'
                        placeholder='Correo electrónico' 
                    />
                    
                    {/* Input de Contraseña */}
                    <input 
                        type="password"
                        {...register("password", {required:true})}
                        className='w-full bg-zinc-700 text-white px-4 py-3 rounded-lg border border-zinc-700 
                                   placeholder-zinc-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition duration-300'
                        placeholder='Contraseña' 
                    />
                    
                    {/* Botón de Registro */}
                    <button 
                        type='submit'
                        className='w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-lg shadow-indigo-500/50 
                                   hover:bg-indigo-700 transition duration-300 ease-in-out mt-6'
                    >
                        Registrar
                    </button>
                    
                </form>
                
            </div>
            
        </div>
  );
}
export default RegisterPage;