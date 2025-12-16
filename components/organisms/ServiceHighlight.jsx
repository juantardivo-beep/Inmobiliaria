export default function ServiceHighlight() {
  return (
    <section className="service-highlight">
      <div className="container">
        <div className="service-highlight__grid">
          <div className="service-highlight__image">
            <img src="/before-and-after-home-renovation.jpg" alt="Home transformation" />
            <div className="badge">Before & After</div>
          </div>

          <div>
            <h2 className="service-highlight__title">Premier Concierge</h2>
            <p className="service-highlight__description">
              Concierge helps you sell your home faster and for more money by covering the cost of home improvement
              services — zero due until closing.*
            </p>
            <ul className="service-highlight__list">
              <li>
                <div className="bullet"></div>
                <span>Professional staging and photography</span>
              </li>
              <li>
                <div className="bullet"></div>
                <span>Home repairs and improvements</span>
              </li>
              <li>
                <div className="bullet"></div>
                <span>No upfront costs or hidden fees</span>
              </li>
            </ul>
            <p className="service-highlight__disclaimer">
              *Depending on your state of residence, fees or interest may apply.
            </p>
            <a href="#" className="service-highlight__link">
              Learn More
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
