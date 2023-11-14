import './AboutMe.css'
import { FormattedMessage } from 'react-intl'

const AboutMe = () => {
    return (
        <div id="about-me" className="about-me">
            <section className="about-me_myself">
                <p className="about-me_myself_greeting"> <FormattedMessage id="greeting" defaultMessage="Hola 👋🏼, me llamo" /></p>
                <h1>Luciano Gelvez</h1>
                <p className='about-me_myself_opucation'> <FormattedMessage id="occupation" defaultMessage="Desarrollador de software" /></p>
            </section>
            <section className="about-me_contact">
                <button onClick={() => {
                    window.open("https://github.com/LucianoGelvez", "_blank")
                }}>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg className="github" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="30" width="30">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.905-.015 3.3 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </div>
                    </div>
                    <span>GitHub</span>

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
                    <span>Linkedin</span>
                </button>
                <button onClick={() => {
                    window.open("https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/cv/Luciano+Gelvez.pdf", "_blank")
                }}>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg className="show" height="30" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 16l-4-5h8l-4 5zm0-14c-5.52 0-10 4.48-10 10h2c0-4.41 3.59-8 8-8s8 3.59 8 8h2c0-5.52-4.48-10-10-10zm-1 14v4h2v-4h-2z" />
                            </svg>
                        </div>
                    </div>
                    <span className='span-ln'>CV online</span>
                </button>

            </section>

            <section className="about-me_description">
                <h2><FormattedMessage id='h2.1' defaultMessage="Sobre mi" /> </h2>
                <p><FormattedMessage id='aboutMe' defaultMessage="Mi conexión con la tecnología nació a los 7 años con un Family Game, impulsándome a pedir una computadora antes de mi viaje de egresado. Ingresé al mundo tecnológico a través del sector industrial, aprendiendo algoritmos, C++, y PLC mientras avanzaba en mi formación. Desde entonces, mi enfoque se ha centrado en el código. Como desarrollador junior full stack, fusiono creatividad y habilidades técnicas para abordar proyectos desde perspectivas diversas, aspirando a crear soluciones funcionales y experiencias significativas para los usuarios. Mi viaje en la tecnología sigue evolucionando, emocionado por las oportunidades de crecimiento continuo." /></p>
            </section>
        </div>
    )
}

export default AboutMe