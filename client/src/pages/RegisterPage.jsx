import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerRequest } from "../api/auth.js";

// Icono de Usuario (FaUser equivalente)
const UserIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// Icono de Correo Electrónico (FaEnvelope equivalente)
const EnvelopeIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// Icono de Contraseña (FaLock equivalente)
const LockIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);


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
     <div className='card-container font-sans'> 
            
            <div className='card-formulario'>
                
                <h1>Crea tu Cuenta</h1>

                <form onSubmit={onSubmit}> 
                    
                    {/* Input de Nombre de Usuario con Icono */}
                    <div className="input-icon-wrapper">
                        <UserIcon />
                        <input 
                            type="text"
                            {...register("name", {required:true})}
                            className='form-control'
                            placeholder='Nombre de usuario' 
                        />
                    </div>
                    
                    {/* Input de Correo Electrónico con Icono */}
                    <div className="input-icon-wrapper">
                        <EnvelopeIcon />
                        <input 
                            type="email"
                            {...register("email", {required:true})}
                            className='form-control'
                            placeholder='Correo electrónico' 
                        />
                    </div>
                    
                    {/* Input de Contraseña con Icono */}
                    <div className="input-icon-wrapper">
                        <LockIcon />
                        <input 
                            type="password"
                            {...register("password", {required:true})}
                            className='form-control'
                            placeholder='Contraseña' 
                        />
                    </div>
                    
                    {/* Botón de Registro */}
                    <div> 
                        <button 
                            type='submit'
                            className='btn-submit'
                        >
                            Registrar
                        </button>
                    </div>
                    
                </form>
                
            </div>
            
        </div>
  );
}
export default RegisterPage;