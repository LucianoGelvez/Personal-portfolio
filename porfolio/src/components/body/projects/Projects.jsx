import { Link } from "react-router-dom"
import './Proyects.css'
import Odontotal from '../../../images/odontotal1.webp'
import Duvine from '../../../images/DuVine.webp'
import EventPlace from '../../../images/EventPlace.webp'
import Elhacendado from '../../../images/Elhacendado1.webp'
import PetShop from '../../../images/PetShop.webp'
import BuenosMuchachos from '../../../images/BuenosMuchachos.webp'
import { FormattedMessage } from "react-intl"

const Projects = () => {

    const proyects = [
        {
            id: 1,
            name: "El hacendado",
            image: Elhacendado,
            text: "ElHacendado.com es un proyecto diseñado para un cliente privado en Medellín, Colombia. Este espacio integral se enfoca en brindar productos y servicios de alta calidad para entusiastas de los caballos, asegurando transparencia y acceso sencillo a los propietarios del negocio. Para la realización de este proyecto se emplearon diversas tecnologías, algunas de las cuales se detallan a continuación. Además de las mencionadas en la sección inferior, se destacan librerías como Formik, Yup y Axios, así como frameworks como Bootstrap. Además, se emplearon tecnologías como Spring Security, API-Rest, Hibernate, y soluciones en la nube, incluyendo Cloudflare.",
            github: "https://github.com/LucianoGelvez/El-Hacendado",
            web: "https://elhacendado.com/"
        },
        {
            id: 2,
            name: "Odontotal",
            image: Odontotal,
            text: "Odontotal.online ofrece los servicios de una clínica odontológica. Con Odontotal, los usuarios pueden agendar citas con diversos especialistas, según su horario de preferencia, una vez que se han registrado en la plataforma. Además, la aplicación cuenta con funcionalidades de gestión tanto para un administrador como para los odontólogos, quienes pueden acceder a la aplicación y utilizar sus recursos para llevar a cabo un seguimiento médico de sus pacientes.",
            github: "https://github.com/LucianoGelvez/Clinica-Odontotal",
            web: "https://odontotal.online/"
        },
        {
            id: 3,
            name: "EventPlace",
            image: EventPlace,
            text: "Proyecto creado en el marco de Digital House, el final Integrador del 1 año de la carrera de CTD, el cual buscaba simplificar el proceso de alquiler de lugares para eventos al usuario, facilitando la comunicación de los clientes con los propietarios directos de los lugares publicados. Creamos un producto con el fin de simplificar el proceso de alquiler de lugares para eventos al usuario, facilitando la comunicación de los clientes con los propietarios directos de los lugares publicados. Para quienes quieran promocionar su salón y espacio para eventos, tienen la posibilidad de crear nuevas publicaciones adjuntando servicios básicos y extras que ofrece su evento, descripción del sitio, recibir pago de reservaciones de manera virtual y aumentar la calidad a través de imágenes profesionales. Finalmente, para los administradores del sitio web de comercio electrónico, existe la posibilidad de gestionar la aplicación de forma general, los diferentes tipos de usuarios que componen la web, como las diferentes publicaciones o cualquier otro tipo de actividad sobre el flujo natural. del comercio electrónico.",
            github: "https://github.com/LucianoGelvez/Proyecto-Booking-EventPlace",
            web: "https://eventplace.site/"
        },
        {
            id: 4,
            name: "Du Vine",
            image: Duvine,
            text: "Una Vineria que busca ofrecer sus productos de manera simple pero elegante, cuenta con un buscador de vinos, carrito de compra y un formulario de pagos",
            github: "https://github.com/LucianoGelvez/Proyecto-E-commerce-DU-VINE--github.io",
            web: "https://lucianogelvez.github.io/Proyecto-E-commerce-DU-VINE--github.io/index.html"
        },
        {
            id: 5,
            name: "DuVine",
            image: PetShop,
            text: "Una Petshop que permite al usuario poder comprar el alimento a sus mascotas de manera online, con una interfaz agradable, que trata de hacer la experiencia del usuario reconfortante.",
            github: "",
            web: ""
        },
        {
            id: 6,
            name: "Barberia Buenos Muchachos",
            image: BuenosMuchachos,
            text: "Una Barberia reconocida en Mendoza, Argentina. La cual necesitaba contar con una pagina a la altura, que fuera elegante y reflejara los valores y los servicios que esta ofrece",
            github: "",
            web: "https://buenosmuchachos.site/"
        },

    ]

    return (
        <div id="projects" className="proyect-container">
            <h2><FormattedMessage id="h2.3" defaultMessage="Proyectos" /></h2>
            <div className="proyect-container_list">
                {proyects.map((item, id) => (
                    <div key={id} className="card-product" style={{ backgroundImage: `url(${item.image})` }}>
                        <div className="info-proyect">
                            <h3 className="proyect-title">{item.name}</h3>
                            <p ><FormattedMessage id={`proyect.${id + 1}`} defaultMessage={item.text} /></p>
                            <div className="ref">
                                <Link to={`/Detalle-de-Proyecto/${item.id}`} style={{ textDecoration: "none", color: "black" }}>
                                    <button> <span className="text">Ver Proyecto</span></button>
                                </Link>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects