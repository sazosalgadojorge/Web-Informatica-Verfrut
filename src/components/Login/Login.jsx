import React from 'react'
import './Login.scss'
import Input from '../Input/Input'
const logotipos = '/logotipo.svg'

/**
 * Componente de formulario de login
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Título del formulario
 * @param {string} props.description - Descripción del formulario
 * @param {string} props.buttonText - Texto del botón de login
 * @param {string} props.registerLink - Enlace de registro 
 * @param {string} props.forgotPasswordLink - Enlace de recuperación de contraseña
 * @param {string} props.usernamePlaceholder - Placeholder del campo usuario
 * @param {string} props.passwordPlaceholder - Placeholder del campo contraseña
 * @param {boolean} props.noBackground - Si es true, no aplica el fondo del contenedor
 */
function Login({
  buttonText,
  description,
  forgotPasswordLink = "https://api.verfrut.cl/RecoverPass",
  passwordPlaceholder,
  registerLink, 
  title,
  usernamePlaceholder,
  noBackground = false
}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se puede agregar la lógica de autenticación
    console.log('Login submitted')
  }

  return (
    <div className={noBackground ? "login-container no-background" : "login-container"}>
      <div className="login-form">
        <div className="login-form-header p-3 d-flex justify-content-center align-items-center">
          <img src={logotipos} alt="Logo Verfrut" style={{height: '8rem', width: 'auto'}} />
        </div>

        <div className="login-form-description d-flex justify-content-center align-items-center">
          <p style={{color: "#282d37", textAlign: "center", fontWeight: "700", fontSize: "1.5rem"}}>
            {title}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="login-form-body">
          <div className="pt-2">
            <div className="form-group">
              <Input
                autoComplete="username"
                id="username" 
                className="form-control"
                placeholder={usernamePlaceholder}
                required
                type="text"
                name="username"
              />
            </div>
          </div>

          <div className="pt-3">
            <div className="form-group">
            <Input
              autoComplete="current-password"       
              id="password"
              className="form-control"
              placeholder={passwordPlaceholder}
              required
              type="password"
              name="password"
            />
            </div>
          </div>

          <div className="pt-3">
            <button type="submit" className="btn btn-primary btn-xl align-items-center justify-content-center w-100" style={{ fontSize: "0.9rem", height: "50px" }}>
              {buttonText}
            </button>
          </div>

          <div className="pt-3">
            <button 
              type="button" 
              onClick={() => window.location.href = 'https://api.verfrut.cl/RecoverPass'}
              className="btn btn-secondary btn-xl align-items-center justify-content-center w-100 p-0" 
              style={{ fontSize: "0.9rem", height: "50px" }}
            >
              {forgotPasswordLink}
            </button>
          </div>
        </form>

        <div className="pt-3">
          <p className="text-center" style={{fontSize: "0.8rem", color: "#000000"}}>
            ¿No tienes una cuenta?
            <a href={registerLink} className="text-primary"> Regístrate</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login