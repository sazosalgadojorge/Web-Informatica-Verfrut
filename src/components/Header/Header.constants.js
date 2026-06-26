import { publicPath } from '../../utils/publicPath'

export const DEFAULT_MENU_ITEMS = [
  {
    label: 'Inicio',
    url: '#',
    subItems: [
      { label: 'Panel Principal', url: '#' },
      { label: 'Novedades', url: '#' },
      { label: 'Anuncios', url: '#' },
      { label: 'Calendario', url: '#' }
    ]
  },
  {
    label: 'Sistemas',
    url: '#',
    subItems: [
      { label: 'Cuenta Corriente Envases', url: 'https://api.verfrut.cl/ctacteenvases' },
      { label: 'Documentos Electrónicos', url: 'https://facturacion.verfrut.cl/' },
      { label: 'Plataforma DEC 5', url: 'https://5.dec.cl' },
      { label: 'Rendiciones', url: 'https://rendiciones.verfrut.cl' },
      { label: 'Vacaciones y Permisos', url: 'https://api.verfrut.cl/vacaciones' }
    ]
  },
  {
    label: 'Soporte TI',
    url: '#',
    subItems: [
      { label: 'Portal de Incidencias Chile', url: 'https://incidencias.verfrut.cl/login' },
      { label: 'Portal de Incidencias Perú', url: 'https://incidencias.verfrut.pe/login' },
      { label: 'Portal de Solicitudes', url: 'https://solicitudes.verfrut.cl' },
      { label: 'Portal de GLPI Chile', url: 'https://glpi.verfrut.cl' },
      { label: 'Portal de GLPI Perú', url: 'https://glpi.verfrut.pe' }
    ]
  },
  {
    label: 'Recursos',
    url: '#',
    subItems: [
      { label: 'Video Tutoriales', url: '#' },
      { label: 'Generar Firmas', url: 'https://api.verfrut.cl/Home/GeneradorFirma' },
      { label: 'Sugerencias', url: 'https://sugerencias.verfrut.cl' }
    ]
  },
  {
    label: 'Turnos',
    url: '#'
  }
];

export const DEFAULT_HEADER_CONFIG = {
  logo: publicPath('logotipo.svg'),
  logoAlt: 'Verfrut Logo',
  primaryButtonText: 'Iniciar Sesión',
  primaryButtonUrl: '#'
};
