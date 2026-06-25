import './FrutAppPromo.scss'
import frutappImg from '../../assets/frutapp.png'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.mobil.verfrut&pcampaignid=web_share'
const APP_STORE_URL = 'https://apps.apple.com/cl/app/frutapp/id6478648879?l=en-GB'

function FrutAppPromo() {
  return (
    <section className="frutapp-promo">
      <div className="container">
        <div className="row align-items-center g-4 g-xl-5">
          <div className="col-xl-5 text-center">
            <img
              src={frutappImg}
              alt="FrutApp"
              className="frutapp-promo__image"
              loading="lazy"
            />
          </div>

          <div className="col-xl-7">
            <div className="frutapp-promo__content">
              <span className="frutapp-promo__tag">Soluciones</span>
              <h2 className="frutapp-promo__title">
                FrutApp: La solución integral para gestionar tu proceso frutícola
              </h2>
              <p className="frutapp-promo__description">
                FrutApp es nuestra innovadora aplicación diseñada para optimizar y
                simplificar la gestión de distintos módulos clave en el proceso
                frutícola. Con una interfaz intuitiva y funcional, permite acceder
                a herramientas específicas para cada etapa del proceso, mejorando la
                productividad y garantizando un manejo eficiente de la información.
              </p>

              <div className="frutapp-promo__stores">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Descargar en Google Play"
                  className="frutapp-promo__store"
                >
                  <img src="/google-play.svg" alt="Google Play" />
                </a>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Descargar en App Store"
                  className="frutapp-promo__store"
                >
                  <img src="/app-store.svg" alt="App Store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrutAppPromo
