
import { FormattedMessage } from 'react-intl'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p><FormattedMessage id='footer.p1' defaultMessage="Gracias por visitar mi sitio web" /></p>
      <p><FormattedMessage id='footer.p2' defaultMessage="Fue hecho con cariño y esfuerzo, espero que te haya gustado ❤ :D" /></p>
    </div>
  )
}

export default Footer