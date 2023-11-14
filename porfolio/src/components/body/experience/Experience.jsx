import { useState } from "react";
import './Experience.css'
import { FormattedMessage } from 'react-intl'
import AccordionFrontEnd from "../../accordin/AccordionFront-end";
import AccordionBackEnd from "../../accordin/AccordionBack-end";
import AccordionSoftSkills from "../../accordin/AccordionSoft-Skills";

const Experience = () => {
  const [isActive, setIsActive] = useState("educacion");

  const handleTitleClick = (option) => {
    if (isActive === option) {
      setIsActive(null);
    } else {
      setIsActive(option);
    }
  };

  return (
    <div id="experience" className="experience">
      <h2><FormattedMessage id="h2.2" defaultMessage="Experiencias" /></h2>
      <section className="experience_story">
        <div className="sidebar"></div>
        <div className="experience_story_container">

          <div className="detailMenuSelection">
            <div className={`detailMenuSelection__title ${isActive === 'educacion' ? 'active' : ''}`} onClick={() => handleTitleClick('educacion')}>
              <FormattedMessage id="education" defaultMessage="Educación" />
            </div>
            <span> /</span>
            <div className={`detailMenuSelection__title ${isActive === 'trabajo' ? 'active' : ''}`} onClick={() => handleTitleClick('trabajo')}>
              <FormattedMessage id="job" defaultMessage="Job" />
            </div>
          </div>
          {isActive === "educacion" ? <div>
            <div className="name-experience" ><h4 >Cetified Tech Developer</h4> <span>/ 07-2023 <FormattedMessage id="education.ctd.0" defaultMessage="al presente" /></span></div>

            <p><FormattedMessage id="education.ctd.1" defaultMessage="Carrera creada por" /> <span>Mercado Libre</span>, <span>Globant</span> <FormattedMessage id="education.ctd.2" defaultMessage="atravez de" /> <span>Digital House</span>
              <FormattedMessage id="education.ctd.3" defaultMessage=", para formar a perfiles muy completos de desarrolladores, abarcando" /> <span className="tech">Front-end</span>, <span className="tech">Back-end</span>, <span className="tech"><FormattedMessage id="education.ctd.4" defaultMessage="Infraestructura" /> </span>, <span className="tech">Testing</span><FormattedMessage id="education.ctd.5" defaultMessage=", como tambien abordando las habilidades blandas con talleres de" />
              <span><FormattedMessage id="education.ctd.6" defaultMessage="Comunicación efectiva, Trabajo en equipo y Colaboración" /></span>
              <FormattedMessage id="education.ctd.7" defaultMessage=", como asi tambíen mesas de trabajos y trabajos Integradores, entre otras.
              Debido a esto concidero que es la mejor carrera para alguien que aspira a Desarrollar software"/><br />
              <FormattedMessage id="education.ctd.8" defaultMessage="1 año terminado- Certificado como" /> <span className="tech"><FormattedMessage id="education.ctd.8.1" defaultMessage="Professional Developer." /></span><br />
              <FormattedMessage id="education.ctd.9" defaultMessage="2 año cursando – Especialidad en desarrollo Back-end." />
            </p>
            <div className="name-experience" ><h4><FormattedMessage id="education.po.1" defaultMessage="Programa One Education" /></h4><span> / 12-2022 al 06-2023</span></div>
            <p><FormattedMessage id="education.po.2" defaultMessage="El programa equipa a los estudiantes con habilidades técnicas y conductuales para actuar como Jr. Developer, un profesional que trabaja para crear y mejorar sitios web, software y aplicaciones, y los prepara para obtener una oportunidad laboral." /></p>
            <div className="name-experience" ><h4><FormattedMessage id="education.tu.1" defaultMessage="Tecnicatura Universitaria" /> </h4><span>/ 04-2018 al 12-2020</span> </div>
            <p> <span className="tech"><FormattedMessage id="education.tu.2" defaultMessage="Tecníco Universitario en Sistemas de control Infustrial y Electricidad" /></span><FormattedMessage id="education.tu.3" defaultMessage=": Los conocimientos y habilidades adquiridas durante mi formación me han preparado para enfrentar desafíos en el campo de la ingeniería de" />  <span className="tech">software</span>
              <FormattedMessage id="education.tu.4" defaultMessage="y la " /><span className="tech"><FormattedMessage id="education.tu.5" defaultMessage="automatización" /></span><FormattedMessage id="education.tu.6" defaultMessage="de procesos en diferentes áreas." /> </p>
            <div className="name-experience" ><h4><FormattedMessage id="education.cc.1" defaultMessage="Cursos y Cerficacciones" /></h4></div>
            <ul>
              <li> {'>'} <a href=""></a><FormattedMessage id="education.cc.2" defaultMessage="SEO y Posicionamiento web para Desarrolladores web" /></li>
              <li> {'>'} <FormattedMessage id="education.cc.3" defaultMessage="Ingles para Desarrolladores" /></li>
              {/* <li> {'>'} AWS Certified Cloud Practitioner</li> */}
            </ul>
          </div>
            :
            <div>
              <div className="name-experience" ><h4><FormattedMessage id="job.ds.1" defaultMessage="Desarrollador de Software" /> <span className="companies">@ Digital Arco</span>
              </h4> <span>/ 08-2023 <FormattedMessage id="job.ds.2" defaultMessage="al Presente" /></span></div>
              <p>
                <span><FormattedMessage id="job.ds.3" defaultMessage="Proyecto de E-Commerce para tienda de insumos para caballos." /></span>
                <br />
                <span><FormattedMessage id="job.ds.4" defaultMessage="Proyecto de Clínica Odontológica." />  </span>
                <br />
                <span><FormattedMessage id="job.ds.5" defaultMessage="Proyecto de Reserva de Salones de Eventos." /> </span>
                <br />
                <FormattedMessage id="job.ds.6" defaultMessage="• En cada proyecto, trabajé para mejorar la eficiencia del flujo
                de trabajo y colaboración entre el equipo a través de la
                implementación de metodologías ágiles."/>
                <br />
                <FormattedMessage id="job.ds.7" defaultMessage="• Participé en el desarrollo de front-end y back-end, además
                de la configuración y administración de la infraestructura
                de las aplicaciones.
                
                Tecnologías que e implementado:"/>
                <br />
                • Front End: <span className="tech">HTML, CSS, SCSS ,JavaScript, React.</span>
                • Back End: <span className="tech">Java, Spring Boot, Spring Cloud, MSQL, MongoDb.</span>
                <FormattedMessage id="job.ds.8" defaultMessage="• Infraestructura:" /> <span className="tech">AWS, Terraform. </span>
                <FormattedMessage id="job.ds.9" defaultMessage="• Metodologías:" /> <span className="tech"> Scrum, Kanban.</span></p>
              <div className="name-experience" ><h4><FormattedMessage id="job.dw.1" defaultMessage="Desarrolador web" /> <span className="companies">@ Forjadores </span></h4><span>/ 08-2022 al 09-2023</span></div>
              <p><FormattedMessage id="job.dw.2" defaultMessage="Como desarrollador web en una startup dinámica, he estado
                involucrado en el desarrollo y la implementación de sitios web
                utilizando"/> <span className="tech">WordPress, Php y JavaScript.</span>
              </p>
              <div className="name-experience" ><h4><FormattedMessage id="job.me.1" defaultMessage="Metalurgico y Electricista" /> <span className="companies"> @ Frimont S.A | Industrias ASA</span></h4><span>/ 2017 al 2022</span></div>
              <p><FormattedMessage id="job.me.2" defaultMessage="Donde aprendí a" /> <span className="tech"><FormattedMessage id="job.me.3" defaultMessage="trabajar en equipo" /></span><FormattedMessage id="job.me.4" defaultMessage=", como también a tener" /> <span className="tech"><FormattedMessage id="job.me.5" defaultMessage="autonomía" /></span>
                <FormattedMessage id="job.me.6" defaultMessage="iendo el encargado del área de electricidad, además a formar parte de una organización, a cumplir con tiempos de entrega, resolución efectiva de problemas, entre otras cosas." /><br />
                <FormattedMessage id="job.me.7" defaultMessage="Ambas empresas me brindaron Carta de Recomendación y permitime ponerlas de referencias para futuros trabajos. " /></p>
            </div>
          }
        </div>
      </section>

      <section className="skills">
        <div className="skills_area">
          <div className="skills_area_title">
            <div className="skills_area_title_h3">
              <h3>Front-End</h3>
            </div>
            <AccordionFrontEnd />
          </div>
        </div>

        <div className="skills_area">
          <div className="skills_area_title">
            <div className="skills_area_title_h3">
              <h3>Back-End</h3>
            </div>
            <AccordionBackEnd />
          </div>
        </div>

        <div className="skills_area">
          <div className="skills_area_title">
            <div className="skills_area_title_h3">
              <h3><FormattedMessage id="skill.soft-skill.tittle" defaultMessage="Habilidades blandas" /></h3>
            </div>
            <AccordionSoftSkills />
          </div>
        </div>

      </section>
    </div>
  )
}

export default Experience