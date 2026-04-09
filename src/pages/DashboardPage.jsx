import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { useAuth } from '../context/AuthContext'
import './Dashboard.scss'

const TABS = [
  { id: 'perfil', label: 'Mi perfil', icon: '👤' },
  { id: 'documentos', label: 'Documentos', icon: '📄' },
  { id: 'configuracion', label: 'Configuración', icon: '⚙️' },
]

function DashboardPage() {
  const navigate = useNavigate()
  const { isAuthenticated, productor, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('perfil')

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  if (!isAuthenticated) {
    return (
      <div className="dashboard-loading">
        <div className="spinner-border text-primary" role="status" />
        <p>Cargando...</p>
      </div>
    )
  }

  const nombre = productor?.nombre ?? productor?.name ?? productor?.razonSocial ?? 'Usuario'
  const email = productor?.email ?? productor?.correo ?? ''
  const rut = productor?.rut ?? productor?.RUT ?? ''
  const telefono = productor?.telefono ?? productor?.fono ?? ''
  const foto = productor?.foto ?? productor?.avatar ?? productor?.imagen ?? null

  return (
    <>
      <Header variant="dashboard" onLogout={handleLogout} />

      <div className="dashboard-panel">
        <div className="container-large">
          <Breadcrumb title="Dashboard" />
        </div>

        <div className="dashboard-body">
        {/* Sidebar / Tabs */}
        <aside className="dashboard-sidebar">
          <div className="dashboard-profile-card">
            <div className="dashboard-avatar-wrap">
              {foto ? (
                <img src={foto} alt={nombre} className="dashboard-avatar" />
              ) : (
                <div className="dashboard-avatar-placeholder">
                  {(nombre.charAt(0) || 'U').toUpperCase()}
                </div>
              )}
            </div>
            <h2 className="dashboard-profile-name">{nombre}</h2>
            {email && <p className="dashboard-profile-email">{email}</p>}
          </div>

          <nav className="dashboard-tabs">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`dashboard-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="dashboard-tab-icon">{tab.icon}</span>
                <span className="dashboard-tab-label">{tab.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Contenido según pestaña */}
        <main className="dashboard-main">
          {activeTab === 'perfil' && (
            <section className="dashboard-section">
              <h1 className="dashboard-section-title">Mi perfil</h1>
              <div className="dashboard-card">
                <div className="dashboard-card-body">
                  <div className="dashboard-field">
                    <label>Nombre</label>
                    <p>{nombre}</p>
                  </div>
                  {email && (
                    <div className="dashboard-field">
                      <label>Email</label>
                      <p>{email}</p>
                    </div>
                  )}
                  {rut && (
                    <div className="dashboard-field">
                      <label>RUT</label>
                      <p>{rut}</p>
                    </div>
                  )}
                  {telefono && (
                    <div className="dashboard-field">
                      <label>Teléfono</label>
                      <p>{telefono}</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {activeTab === 'documentos' && (
            <section className="dashboard-section">
              <h1 className="dashboard-section-title">Documentos</h1>
              <div className="dashboard-card">
                <div className="dashboard-card-body">
                  <p className="dashboard-placeholder">Aquí podrás ver y descargar tus documentos cuando estén disponibles.</p>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'configuracion' && (
            <section className="dashboard-section">
              <h1 className="dashboard-section-title">Configuración</h1>
              <div className="dashboard-card">
                <div className="dashboard-card-body">
                  <p className="dashboard-placeholder">Opciones de cuenta y preferencias (próximamente).</p>
                </div>
              </div>
            </section>
          )}
        </main>
        </div>
      </div>
    </>
  )
}

export default DashboardPage
