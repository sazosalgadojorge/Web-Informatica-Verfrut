import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input/Input'
import Btn from '../components/Btn/Btn'
import { login } from '../services/auth'
import './login.scss'
const logotipos = '/logotipo.svg'

const BACKGROUND_IMAGES = [
  '/fruits/img-1.jpeg',
  '/fruits/img-2.jpg',
  '/fruits/img-3.jpg',
  '/fruits/img-4.jpg',
  '/fruits/img-5.jpg',
  '/fruits/img-6.jpg',
  '/fruits/img-7.jpg',
]

function parseJwt(token) {
  try {
    const base64Payload = token.split('.')[1]
    const payload = atob(base64Payload)
    return JSON.parse(payload)
  } catch (e) {
    return null
  }
}

function preloadImages(images) {
  images.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const isFormValid = email.trim() !== '' && password.trim() !== ''

  useEffect(() => {
    setCurrentImageIndex(0)
    preloadImages(BACKGROUND_IMAGES)

    const interval = setInterval(() => {
      setCurrentImageIndex((i) => (i + 1) % BACKGROUND_IMAGES.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) return

    setLoginError('')
    setIsLoading(true)

    try {
      const response = await login(email, password)
      setIsLoading(false)

      if (response?.token) {
        parseJwt(response.token)
        localStorage.setItem('token', response.token)
        if (response.productor) {
          localStorage.setItem('productor', JSON.stringify(response.productor))
        }
      }

      navigate('/dashboard')
    } catch {
      setIsLoading(false)
      setLoginError('Email o contraseña incorrectos')
    }
  }

  const onTutorialClick = () => {
    navigate('/')
  }

  return (
    <div className="login-container">
      {/* Background images with fade effect */}
      {BACKGROUND_IMAGES.map((image, i) => (
        <div
          key={image}
          className={`background-layer ${currentImageIndex === i ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      <div className="gradient-overlay" />

      {/* Bienvenida */}
      <div className="left-section">
      </div>

      {/* Login */}
      <div className="right-section">
        <div className="form-container">
          <div className="logo-container">
            <img src={logotipos} alt="Verfrut Logo" className="logo" />
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label text-start">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="user@verfrut.cl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label text-start">Contraseña</label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control"
              />
            </div>

            {loginError && (
              <div className="error-message">{loginError}</div>
            )}

            <div className="pt-1">
              <Btn
                type="submit"
                variant="primary"
                text={isLoading ? 'Cargando...' : 'Iniciar sesión'}
                disabled={!isFormValid || isLoading}
              />
            </div>

            <a href="#" className="forgot-password-link">¿Olvidaste tu contraseña?</a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
