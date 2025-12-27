import styles from './aboutUS.module.scss';

export default function AboutUS() {

    const endorsements = [
        { name: "Juan Martínez", title: "CEO de Propiedades Premium", image: "/cci.jpg" },
        { name: "María López", title: "Directora de Ventas Nacionales", image: "/ceci.jpg" },
        { name: "Carlos Rodríguez", title: "Especialista en Valuaciones", image: "/fira.jpg" },
    ]

    return (
        <div>
            <section className={styles.nosotros}>
                <div className={styles.container}>
                    <h2>Quienes Somos</h2>
                    <p>
                        La empresa Barbier, abre sus puertas al Publico en Julio del Año 2006, y fue fundada por el Escribano Doctor Elvio Santos Barbier, quien al Jubilarse de su Profesión de Escribano Publico, que ejerció por más de 35 años, juntamente con su Hijo Elvio Alberto Barbier, deciden emprender este nuevo proyecto comercial en sus vidas, siendo acompañados moralmente en este emprendimiento por sus Hijas quiénes respectivamente en su Profesiones Particulares, cada una de ellas, Asesoran Legalmente a personas relacionadas con una posible operación en el Rubro Inmobiliario.
                    </p>
                </div>
            </section>

            <section className={styles.mission}>
                <div className={styles.container}>
                    <h2>Nuestra Misión</h2>
                    <p>
                        Ofrecer a nuestros clientes soluciones trascendentes, suministrando una combinación única de valor en conocimiento y experiencia, con ética y profesionalismo. Nuestros sólidos principios éticos, fuerte compromiso, honestidad, eficacia y responsabilidad, nos han guiado desde 2006 como empresa familiar.
                    </p>
                </div>
            </section>


            <section className={styles.vision}>
                <div className={styles.container}>
                    <h2>Nuestra Visión</h2>
                    <p>
                        Ser reconocidos como una organización líder en el mercado, por la calidad de nuestros servicios, superando las expectativas de los clientes, mediante un modelo de gestión propio soportado en la aplicación de conocimientos, experiencias y tecnologías aplicados en combinación para éste fin.
                    </p>
                </div>
            </section>

            <section className={styles.location}>
                <div className={styles.container}>
                    <h2>Dónde Estamos</h2>
                    <div className={styles.locationContent}>
                        <div className={styles.map}>
                            <img src="/maps.png" alt="Mapa de ubicación" />
                        </div>
                        <div className={styles.locationInfo}>
                            <h3>Oficina Principal</h3>
                            <p>Bv. Pellegrini 3275 - Santa Fe</p>
                            <p>Santa Fe, CP 3000</p>
                            <h3>Contacto</h3>
                            <p>Teléfono: 0342 4554672 - 4556459</p>
                            <p>Email: embarbier119@gmail.com</p>
                            <h3>Horarios</h3>
                            <p>Lunes a Viernes: 9:00 - 18:00</p>
                            <p>Sábados: 10:00 - 14:00</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.endorsements}>
                <div className={styles.container}>
                    <h2>Quiénes Nos Avalan</h2>
                    <p className={styles.subtitle}>Profesionales con experiencia y reconocimiento en el sector inmobiliario</p>
                    <div className={styles.grid}>
                        {endorsements.map((person, idx) => (
                            <div key={idx} className={styles.card}>
                                <img src={person.image} alt={person.name} />
                                <h3>{person.name}</h3>
                                <p>{person.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}