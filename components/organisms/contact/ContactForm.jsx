import styles from "./contactForm.module.scss";
import Image from "next/image";
import phoneIcon from "../../../assets/phone-icon-variant.svg";
import worldIcon from "../../../assets/world-icon-variant.svg";
import mailIcon from "../../../assets/mail-icon-variant.svg";
import matriculaIcon from "../../../assets/matricula-icon-variant.svg";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    comentario: "",
  });
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Por favor, completa la verificación de seguridad");
      return;
    }

    console.log("Formulario enviado:", form);
    console.log("Captcha token:", captchaValue);

    setForm({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      comentario: "",
    });
    setCaptchaValue(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>CONTACTESE CON NOSOTROS</h2>
        <div className={styles.divider}></div>
        <p>Complete el formulario y nos pondremos en contacto.</p>
      </div>
      <div className={styles.info}>
        <div className={styles.sucursales}>
          <div className={styles.footer__column}>
            <h3>EIB Boulevard</h3>
            <ul>
              <li>
                <Image src={phoneIcon} alt="phone" className={styles.icons} />
                <p>0342 4554672 - 4556459</p>
              </li>
              <li>
                <Image src={mailIcon} alt="mail" className={styles.icons} />
                <p>embarbier119@gmail.com</p>
              </li>
              <li>
                <Image src={worldIcon} alt="world" className={styles.icons} />
                <p>Bv. Pellegrini 3275 - Santa Fe</p>
              </li>
              <li>
                <Image
                  src={matriculaIcon}
                  alt="matricula"
                  className={styles.icons}
                />
                <p>Matricula N° 72 & 482</p>
              </li>
            </ul>
          </div>
          <div className={styles.footer__column}>
            <h3>EIB Facundo</h3>
            <ul>
              <li>
                <Image src={phoneIcon} alt="phone" className={styles.icons} />
                <p>0342 4563001</p>
              </li>
              <li>
                <Image src={mailIcon} alt="mail" className={styles.icons} />
                <p>ngallardo@eib.com.ar</p>
              </li>
              <li>
                <Image src={worldIcon} alt="world" className={styles.icons} />
                <p>Fdo. Zuviria 4289 - Santa Fe</p>
              </li>
              <li>
                <Image
                  src={matriculaIcon}
                  alt="matricula"
                  className={styles.icons}
                />
                <p>Matricula N° 640</p>
              </li>
            </ul>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <label style={{ flex: 1 }}>
              <input
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                placeholder="Nombre"
              />
            </label>

            <label style={{ flex: 1 }}>
              <input
                name="apellido"
                value={form.apellido}
                onChange={handleChange}
                required
                placeholder="Apellido"
              />
            </label>
          </div>

          <div className={styles.row}>
            <label style={{ flex: 1 }}>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email"
              />
            </label>

            <label style={{ flex: 1 }}>
              <input
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
                placeholder="Teléfono"
              />
            </label>
          </div>

          <div className={styles.row} style={{ height: "10rem" }}>
            <label style={{ flex: 1 }}>
              <textarea
                name="comentario"
                value={form.comentario}
                onChange={handleChange}
                placeholder="Comentario"
              />
            </label>
          </div>

          <div className={styles.row}>
            <div className={styles.captchaContainer}>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
                theme="light"
              />
            </div>

            <div className={styles.submitBtn}>
              <button
                type="submit"
                className="btn-custom-primary"
                disabled={!captchaValue}
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
