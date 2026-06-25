import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './EquipoTI.scss'

function EquipoTI() {
  const [miembros, setMiembros] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/json/equipo-ti.json', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar el equipo')
        return res.json()
      })
      .then((data) => setMiembros(Array.isArray(data) ? data : []))
      .catch(() => setError(true))
  }, [])

  if (error || miembros.length === 0) return null

  return (
    <section className="equipo-ti">
      <div className="container">
        <div className="equipo-ti__header">
          <div>
            <span className="equipo-ti__tag">Expertos en tecnologías</span>
            <h2 className="equipo-ti__title">Nuestro Equipo TI</h2>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="equipo-ti__slider"
        >
          {miembros.map((m) => (
            <SwiperSlide key={m.email + m.nombre}>
              <article className="equipo-ti__card">
                <div className="equipo-ti__img-wrap">
                  <img
                    src={m.foto}
                    alt={m.nombre}
                    loading="lazy"
                    className="equipo-ti__img"
                  />
                  <a
                    href={`mailto:${m.email}`}
                    className="equipo-ti__mail"
                    aria-label={`Escribir a ${m.nombre}`}
                  >
                    <i className="fi fi-rr-envelope" />
                  </a>
                </div>
                <div className="equipo-ti__body">
                  <h3 className="equipo-ti__name">{m.nombre}</h3>
                  <span className="equipo-ti__role">{m.cargo}</span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default EquipoTI
