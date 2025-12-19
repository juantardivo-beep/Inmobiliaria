import { getAssetPath } from "@/helpers/getAssetsPath"

export default function ServiceHighlight() {
  return (
    <section className="service-highlight">
      <div className="container">
        <div className="service-highlight__grid">
          <div className="service-highlight__image">
            <img src={getAssetPath("/before-and-after-home-renovation.jpg")} alt="Home transformation" />
          </div>

          <div>
            <h2 className="service-highlight__title">Otros Servicios</h2>
            <p className="service-highlight__description">
              (Nombre de la inmobiliaria) le ayuda a vender su casa más rápido y por más dinero al cubrir el costo de los servicios de mejoras para el hogar
              — sin pagos hasta el cierre.*
            </p>
            <ul className="service-highlight__list">
              <li>
                <div className="bullet"></div>
                <span>Escenografía y fotografía profesionales</span>
              </li>
              <li>
                <div className="bullet"></div>
                <span>Reparaciones y mejoras en el hogar</span>
              </li>
              <li>
                <div className="bullet"></div>
                <span>Sin costes iniciales ni tarifas ocultas.</span>
              </li>
            </ul>
            <p className="service-highlight__disclaimer">
              *Según el estado en el que residas, pueden aplicarse comisiones o intereses.
            </p>
            <a href="#" className="service-highlight__link">
              Más información
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
