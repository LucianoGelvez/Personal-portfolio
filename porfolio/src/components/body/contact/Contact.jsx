import './Contact.css'
import Whatsapp from '../../../images/icons/wtp.svg'
import mail from '../../../images/icons/mail.svg'
import Form from '../../form/Form'
import { FormattedMessage } from 'react-intl'

export const Contact = () => {

  return (
    <div id='contact' className="contact-contenedor">
      <div className="contact-contenedor_text">
        <h2><FormattedMessage id='contact.1' defaultMessage="Contacta" /><span>Me!</span></h2>
        <h3><FormattedMessage id='contact.2' defaultMessage="Buscas un Desarrollador?" /> </h3>
        <p className='i-am'><FormattedMessage id='contact.3' defaultMessage="Soy un desarrollador Full Stack, capaz de construir soluciones personalizadas de front-end y back-end, implementando buenas prácticas y metodologías ágiles." /> </p>
        <p>+54 2613865201</p>
        <p>contact@lucianoGelvez.com</p>
        <p><FormattedMessage id='contact.4' defaultMessage="Programo para crear soluciones, no solo para resolver problemas." /> </p>
        <div className='contact-contenedor_text__icons'>
          <button onClick={() => {
            const mensaje = "Hola%20Luciano,%20¿cómo%20estás%3F";
            window.open(`https://api.whatsapp.com/send?phone=542613865201&text=${mensaje}`, "_blank");
          }}>
            <div className="svg-wrapper">
              <div className="svg-wrapper-1">
                <img src={Whatsapp} alt="WhatsApp Icon" />
              </div>
            </div>
          </button>

          <button onClick={() => {
            window.open("https://www.linkedin.com/in/lucianogelvez/", "_blank")
          }}>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg className="ln" height="30" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
                  <path d="M22.225 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.452C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0zM7.257 20.437H3.437V9h3.82v11.437zM5.35 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zM20.567 20.437h-3.815v-5.352c0-1.27-.022-2.903-1.769-2.903-1.77 0-2.043 1.382-2.043 2.807v5.447h-3.816V9h3.668v1.566h.053c.51-.964 1.75-1.977 3.6-1.977 3.854 0 4.57 2.539 4.57 5.842v6.006h-.01z">
                  </path>
                </svg>
              </div>
            </div>
          </button>
          <button onClick={() => {
            window.open('mailto:contact@lucianogelvez.com', '_blank');
          }}>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <img src={mail} alt="e-mail" />

              </div>
            </div>
          </button>

        </div>
      </div>

      <Form className="contact-contenedor_form" />
      <div></div>

    </div>
  )
}
