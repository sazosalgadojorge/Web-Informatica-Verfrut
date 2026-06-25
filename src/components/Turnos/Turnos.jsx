import React, { useState, useEffect } from 'react'
import './Turnos.scss'
import Footer from '../Footer/Footer'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import { Input } from '../ui'


const Turnos = () => {
  const [turnoDesarrollo, setTurnoDesarrollo] = useState(null);
  const [turnoSoporte, setTurnoSoporte] = useState(null);

  useEffect(() => {
    // Función para obtener la semana del año
    const getWeek = (date) => {
      const newDate = new Date(date.getTime());
      newDate.setHours(0, 0, 0, 0);
      newDate.setDate(newDate.getDate() + 3 - (newDate.getDay() + 6) % 7);
      const week1 = new Date(newDate.getFullYear(), 0, 4);
      return 1 + Math.round(((newDate - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    };

    const semanaActual = getWeek(new Date());

    // Cargar datos de desarrollo
    fetch('public/json/turnos_sistemas.json')
      .then(response => response.json())
      .then(data => {
        const turno = data.find(t => t.semana === semanaActual && t.area === "Desarrollo");
        setTurnoDesarrollo(turno);
      })
      .catch(error => console.error('Error cargando turnos de desarrollo:', error));

    // Cargar datos de soporte
    fetch('public/json/turnos_soporte.json')
      .then(response => response.json())
      .then(data => {
        const turno = data.find(t => t.semana === semanaActual && t.area === "Soporte");
        setTurnoSoporte(turno);
      })
      .catch(error => console.error('Error cargando turnos de soporte:', error));

  }, []);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container-large">
        <Breadcrumb title="Turnos"/>
      </div>

      {/* Turnos */}
    <div className="turnos-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Primera sección: Explicación */}
            <div className="turnos-section mb-5">
              <div className="row">
                <div className="col-12">
                  <h2 className="section-title text-start">
                  💬 ¿Cómo funcionan los turnos de soporte y sistemas?
                  </h2>
                  <p className="section-description text-start">
                    Los turnos se asignan semanalmente para garantizar que siempre haya personal disponible 
                    para atender incidencias técnicas y dar soporte a los sistemas operativos. Cada área 
                    tiene un responsable designado que está disponible durante toda la semana.
                  </p>
                </div>
              </div>
            </div>

            {/* Segunda sección: Contactos */}
            <div className="turnos-section">
              <div className="row">
                <div className="col-12">
                  <h2 className="section-title text-start">
                    💬 ¿A quién contactar esta semana?
                  </h2>
                </div>
              </div>

              <div className="row justify-content-center pt-5">
                {/* Desarrollo */}
                <div className="col-md-6 mb-4">
                  <div className="contact-card">
                    <div className="card-icon">
                        <img src="public/whatsapp.svg" alt="Desarrollo" width={40} height={40} style={{fill: '#184289'}} />
                    </div>
                    <div className="card-content text-start">
                      <h3 className="card-title">Área de Desarrollo</h3>
                      {turnoDesarrollo ? (
                        <>
                          <p className="contact-name">{turnoDesarrollo.responsable}</p>
                          <p className="contact-phone">{turnoDesarrollo.telefono}</p>
                        </>
                      ) : (
                        <p className="no-turno">No hay turno asignado</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Soporte */}
                <div className="col-md-6 mb-4">
                  <div className="contact-card">
                    <div className="card-icon">
                      <img src="public/whatsapp.svg" alt="Soporte" width={40} height={40} style={{fill: '#184289'}} />
                    </div>
                    <div className="card-content text-start">
                      <h3 className="card-title">Soporte Técnico</h3>
                      {turnoSoporte ? (
                        <>
                          <p className="contact-name">{turnoSoporte.responsable}</p>
                          <p className="contact-phone">{turnoSoporte.telefono}</p>
                        </>
) : (
                        <p className="no-turno">No hay turno asignado</p>
                      )}
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pt-5 mt-5">
      <Footer />
    </div>
    
    </div>
  )
}

export default Turnos
