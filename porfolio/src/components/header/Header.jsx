
import './Header.css'
import logo from '../../images/yo.gif'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl';

const Header = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="header">
            {!show && <div className="logo">
                <img src={logo} alt="Logo personal" />
            </div>}
            <div>
                <nav>
                    <ul className="nav-link">
                        <li><div className='detailMenuSelection__title'><a href="#experience"><FormattedMessage id='h2.2' defaultMessage='Experiencia' /></a></div></li>
                        <li><div className='detailMenuSelection__title'><a href="#projects"><FormattedMessage id='h2.3' defaultMessage='Proyectos' /></a></div></li>
                    </ul>
                </nav>
            </div>
            <a href="#contact" className="btn"><button><FormattedMessage id='h2.4' defaultMessage='Contacto' /></button></a>
            {!show && <button className='menu' onClick={() => setShow(true)}> <span>Menu</span></button>}

            {show && <div className="overlay">
                <button onClick={() => setShow(false)} className="close"> <span>X</span></button>
                <div className="overlay-content">
                    <a href="#about-me"><FormattedMessage id='h2.1' defaultMessage="Sobre mí" /></a>
                    <a href="#experience"><FormattedMessage id='h2.2' defaultMessage="Experiencia" /></a>
                    <a href="#projects"><FormattedMessage id='h2.3' defaultMessage="Proyectos" /></a>
                    <a href="#contact"><FormattedMessage id='h2.4' defaultMessage="Contacto" /></a>
                </div>
            </div>}
        </div>
    )
}

export default Header