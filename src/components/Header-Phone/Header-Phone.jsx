import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Drawer } from '../ui'
import GestionUsuariosModal from '../GestionUsuariosModal/GestionUsuariosModal'
import IncidenciasModal from '../IncidenciasModal/IncidenciasModal'
import HeaderPhoneMenu from './HeaderPhoneMenu'
import { publicPath } from '../../utils/publicPath'
import './Header-Phone.scss'

const logoSrc = publicPath('logotipo.svg')
const homeHref = publicPath('')

function HeaderPhone() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path) => location.pathname === path

  const handleHomeClick = (e) => {
    e.preventDefault()
    navigate('/')
  }

  const handleNavigate = (path) => {
    navigate(path)
    setMenuOpen(false)
  }

  return (
    <>
      <header className="hp-header">
        <button
          type="button"
          className="hp-toggle"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(true)}
        >
          <i className="fi fi-rr-menu-burger" aria-hidden="true" />
        </button>

        <a href={homeHref} className="hp-logo" onClick={handleHomeClick} aria-label="Inicio Verfrut">
          <img src={logoSrc} alt="Verfrut" />
        </a>
      </header>

      <Drawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        title="Menú"
        position="left"
        size="sm"
      >
        <HeaderPhoneMenu onNavigate={handleNavigate} isActive={isActive} />
      </Drawer>

      <GestionUsuariosModal />
      <IncidenciasModal />
    </>
  )
}

export default HeaderPhone
