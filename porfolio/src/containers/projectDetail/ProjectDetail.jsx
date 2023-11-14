
import { Link, useParams } from 'react-router-dom';
import './ProyectDetail.css'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import aws from '../../images/icons//color-icons/aws.svg'
import html from '../../images/icons//color-icons/html.svg'
import css from '../../images/icons//color-icons/css.svg'
import JavaScript from '../../images/icons/color-icons/javascript1.svg'
import reactJs from '../../images/icons/color-icons/reactJS.svg'
import scss from '../../images/icons/color-icons/scss.svg'
import figma from '../../images/icons/color-icons/figma.svg'
import java from '../../images/icons/color-icons/java.svg'
import springBoot from '../../images/icons/color-icons/spring.svg'
import jwt from '../../images/icons/color-icons/jwt.svg'
import gitlab from '../../images/icons/color-icons/gitlab.svg'
import github from '../../images/icons/color-icons/github.svg'
import mysql from '../../images/icons/color-icons/mysql.svg'
import terraform from '../../images/icons/color-icons/terraform.svg'
import postman from '../../images/icons/color-icons/postman.svg'
import jest from '../../images/icons/color-icons/jest.png'
import web from '../../images/icons/code-64.png'
import wordpress from '../../images/icons/color-icons/wordpress.svg'
import goBack from '../../images/icons/color-icons/return.svg'
import { FormattedMessage } from 'react-intl';

const ProjectDetail = () => {
  const { id } = useParams()
  const proyects = [
    {
      id: 1,
      name: "El hacendado",
      image: [
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/elhacendado/AnyConv.com__elhacendado.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/elhacendado/AnyConv.com__elhacendado.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/elhacendado/AnyConv.com__elhacendado1.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/elhacendado/AnyConv.com__elhacendado1.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/elhacendado/AnyConv.com__elhacendado2.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/elhacendado/AnyConv.com__elhacendado2.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/elhacendado/AnyConv.com__elhacendado4.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/elhacendado/AnyConv.com__elhacendado4.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/elhacendado/AnyConv.com__elhacendado5.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/elhacendado/AnyConv.com__elhacendado5.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/elhacendado/AnyConv.com__elhacendado6.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/elhacendado/AnyConv.com__elhacendado6.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/elhacendado/AnyConv.com__elhacendado7.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/elhacendado/AnyConv.com__elhacendado7.webp" },


      ],
      description: "ElHacendado.com es un proyecto diseñado para un cliente privado en Medellín, Colombia. Este espacio integral se enfoca en brindar productos y servicios de alta calidad para entusiastas de los caballos, asegurando transparencia y acceso sencillo a los propietarios del negocio. Para la realización de este proyecto se emplearon diversas tecnologías, algunas de las cuales se detallan a continuación. Además de las mencionadas en la sección inferior, se destacan librerías como Formik, Yup y Axios, así como frameworks como Bootstrap. Además, se emplearon tecnologías como Spring Security, API-Rest, Hibernate, y soluciones en la nube, incluyendo Cloudflare.",
      github: "https://github.com/LucianoGelvez/El-Hacendado",
      web: "https://elhacendado.com/",
      technologies:
      {
        HTML: html, CSS: css, JavaScript: JavaScript,
        reactJs: reactJs, scss: scss, figma: figma,
        java: java, springBoot: springBoot, jwt: jwt,
        gitlab: gitlab, mysql: mysql,
        Postman: postman, aws: aws, terraform: terraform, jest: jest
      },
    },
    {
      id: 2,
      name: "Odontotal",
      image: [
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/odontotal.gif", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/odontotal.gif" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal2.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal2.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal3.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal3.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal4.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal4.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal5.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal5.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal6.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal6.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal7.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal7.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal8.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal8.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal9.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal9.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal10.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal10.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal1.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/odontotal/AnyConv.com__odontotal1.webp" },
      ],
      description: "Odontotal.online ofrece los servicios de una clínica odontológica. Con Odontotal, los usuarios pueden agendar citas con diversos especialistas, según su horario de preferencia, una vez que se han registrado en la plataforma. Además, la aplicación cuenta con funcionalidades de gestión tanto para un administrador como para los odontólogos, quienes pueden acceder a la aplicación y utilizar sus recursos para llevar a cabo un seguimiento médico de sus pacientes.",
      github: "https://github.com/LucianoGelvez/Clinica-Odontotal",
      web: "https://odontotal.online/",
      technologies:
      {
        HTML: html, CSS: css, JavaScript: JavaScript,
        reactJs: reactJs, scss: scss, figma: figma,
        java: java, springBoot: springBoot, jwt: jwt,
        gitlab: gitlab, mysql: mysql,
        Postman: postman, aws: aws
      },
    },
    {
      id: 3,
      name: "EventPlace",
      image: [
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace1.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace1.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace2.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace2.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace3.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace3.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace4.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace4.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace5.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace5.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace6.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace6.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace7.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace7.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace8.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace8.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace9.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/eventplace/AnyConv.com__eventplace9.webp" },
      ],
      description: "Proyecto creado en el marco de Digital House, el final Integrador del 1 año de la carrera de CTD, el cual buscaba simplificar el proceso de alquiler de lugares para eventos al usuario, facilitando la comunicación de los clientes con los propietarios directos de los lugares publicados. Creamos un producto con el fin de simplificar el proceso de alquiler de lugares para eventos al usuario, facilitando la comunicación de los clientes con los propietarios directos de los lugares publicados. Para quienes quieran promocionar su salón y espacio para eventos, tienen la posibilidad de crear nuevas publicaciones adjuntando servicios básicos y extras que ofrece su evento, descripción del sitio, recibir pago de reservaciones de manera virtual y aumentar la calidad a través de imágenes profesionales. Finalmente, para los administradores del sitio web de comercio electrónico, existe la posibilidad de gestionar la aplicación de forma general, los diferentes tipos de usuarios que componen la web, como las diferentes publicaciones o cualquier otro tipo de actividad sobre el flujo natural. del comercio electrónico.",
      github: "https://github.com/LucianoGelvez/Proyecto-Booking-EventPlace",
      web: "https://eventplace.site/",
      technologies:
      {
        HTML: html, CSS: css, JavaScript: JavaScript,
        reactJs: reactJs, scss: scss, figma: figma,
        java: java, springBoot: springBoot, jwt: jwt, gitlab: gitlab,
        mysql: mysql, Postman: postman, aws: aws,
        terraform: terraform, jest: jest
      },
    },
    {
      id: 4,
      name: "Du Vine",
      image: [
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/duvine/AnyConv.com__duvine1.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/duvine/AnyConv.com__duvine1.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/duvine/AnyConv.com__duvine2.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/duvine/AnyConv.com__duvine2.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/duvine/AnyConv.com__duvine3.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/duvine/AnyConv.com__duvine3.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/duvine/AnyConv.com__duvine4.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/duvine/AnyConv.com__duvine4.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/duvine/AnyConv.com__duvine5.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/duvine/AnyConv.com__duvine5.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/duvine/AnyConv.com__duvine6.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/duvine/AnyConv.com__duvine6.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/duvine/AnyConv.com__duvine7.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/duvine/AnyConv.com__duvine7.webp" },

      ],

      description: "Un proyecto realizado en un entorno de práctica para afianzar los fundamentos de HTML, CSS, JavaScript, Github y metodologías ágiles. Una vinatería que busca ofrecer sus productos de manera simple pero elegante. Cuenta con un buscador de vinos, carrito de compra y un formulario de pagos.",
      github: "https://github.com/LucianoGelvez/Proyecto-E-commerce-DU-VINE--github.io",
      web: "https://lucianogelvez.github.io/Proyecto-E-commerce-DU-VINE--github.io/index.html",
      technologies:
        { HTML: html, CSS: css, JavaScript: JavaScript },
    },
    {
      id: 5,
      name: "Huellitas",
      image: [
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/huellitas/AnyConv.com__proximamente+(1).webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/huellitas/AnyConv.com__proximamente+(1).webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/huellitas/AnyConv.com__proximamente2.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/huellitas/AnyConv.com__proximamente2.webp" },
      ],
      description: "Una Petshop que permite al usuario poder comprar el alimento a sus mascotas de manera online, con una interfaz agradable, que trata de hacer la experiencia del usuario reconfortante.",
      github: "",
      web: "https:/proximamente.site",
      technologies:
      {
        HTML: html, CSS: css, JavaScript: JavaScript,
        reactJs: reactJs, scss: scss, figma: figma,
        java: java, springBoot: springBoot, jwt: jwt,
        gitlab: gitlab, mysql: mysql,
        Postman: postman, aws: aws
      },
    },
    {
      id: 6,
      name: "Barberia Buenos Muchachos",
      image: [
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/buenos/AnyConv.com__buenos1.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/buenos/AnyConv.com__buenos1.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/buenos/AnyConv.com__buenos2.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/buenos/AnyConv.com__buenos2.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/buenos/AnyConv.com__buenos3.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/buenos/AnyConv.com__buenos3.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/buenos/AnyConv.com__buenos4.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/buenos/AnyConv.com__buenos4.webp" },
        { original: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/buenos/AnyConv.com__buenos5.webp", thumbnail: "https://portafolio-personal-luciano-gelvez.s3.sa-east-1.amazonaws.com/eventPlace/proyectos/buenos/AnyConv.com__buenos5.webp" },
      ],
      description: "Una Barberia reconocida en Mendoza, Argentina. La cual necesitaba contar con una pagina a la altura, que fuera elegante y reflejara los valores y los servicios que esta ofrece. Para este proyecto use principalmente un cms como Wordpress, pero tambien me ayude de mis conocimientos en HTML, CSS y Javascript para realizar modificiaciones pertinentes.",
      github: "",
      web: "https://buenosmuchachos.site/",
      technologies:
      {
        Wordpress: wordpress, HTML: html, CSS: css, JavaScript: JavaScript
      },
    },

  ]


  const projectId = parseInt(id);
  const project = proyects.find((prod) => prod.id === projectId);

  return (
    <div className='container-product'>
      <p className='return'><Link to="/"><img src={goBack} /></Link></p>
      <div className='container-product-detail'>
        <ImageGallery
          items={project.image}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
          thumbnailPosition='left'
          slideOnThumbnailOver={false}
          showIndex={false}
          useTranslate3D={true}
          disableThumbnailScroll={false}
          disableSwipe={false}
        />
        <div className='container-product-detail_info'>
          <h1>{project.name}</h1>
          <p><FormattedMessage id={`proyect.${id}`} defaultMessage={project.description} /></p>
          <p>{project.github != "" && <a href={project.github} target='blank'><img src={github} /></a>} <a href={project.web} target='blank'><img src={web} alt="web" /></a></p>
        </div>
      </div>
      <div className='container-product-technologies'>
        <h2 className='container-product-technologies__h2'><FormattedMessage id="e.Tech" defaultMessage="Tecnologías Empleadas" /></h2>
        <div className='container-product-technologies__project'>
          {Object.keys(project.technologies).map((techName, index) => (
            <div className='container-product-technologies__project___card' key={index}>
              <img src={project.technologies[techName]} alt={techName} />
              <p>{techName}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  )

}

export default ProjectDetail