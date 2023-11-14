import { useState } from 'react';
import './Accordion.css';
import java from '../../images/icons/java.svg'
import springBoot from '../../images/icons/springBoot.svg'
import nodeJs from '../../images/icons/nodeJs.svg'
import mysql from '../../images/icons/mysql.svg'
import mongodb from '../../images/icons/mongodb.svg'
import postman from '../../images/icons/postman.svg'
import aws from '../../images/icons/aws1.svg'
import terraform from '../../images/icons/terraform.svg'
import { FormattedMessage } from 'react-intl';

const AccordionBackEnd = () => {
  const [selected, setSelected] = useState(3)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }


  const dataBackEnd = [
    {
      id: 1,
      question: "¿Qué lenguajes de programación utilizo para el Back-end?",
      answer: "Primordialmente utilizo Java y Node.js para el desarrollo Back-end."
    },
    {
      id: 2,
      question: "Frameworks y librerías que utilizo",
      answer: "Suelo trabajar con Spring Boot y Express.js en el desarrollo Back-end."
    },
    {
      id: 3,
      question: "Bases de Datos e Infraestructura",
      answer: "Tengo experiencia en el diseño de bases de datos y en el uso de sistemas de gestión de bases de datos como MySQL y MongoDB. Además utilizo Terraform para montar la infraestructura en AWS."
    },
    {
      id: 4,
      question: "Tecnologías de Back-end",
      answer: {
        java: java,
        springBoot: springBoot,
        nodeJs: nodeJs,
        mysql: mysql,
        mongodb: mongodb,
        postman: postman,
        aws: aws,
        terraform: terraform
      }
    }
  ]


  return (
    <div className='wrapper'>
      <div className='wrapper_accordion'>
        {dataBackEnd.map((item, id) => (
          <div key={id} className='wrapper_accordion__item'>
            <div className='wrapper_accordion__item___title' onClick={() => toggle(id)}>
              <h3><FormattedMessage id={`skill.back-end.tittle.${id + 1}`} defaultMessage={item.question} /></h3>
              <span>{selected === id ? '-' : '+'}</span>
            </div>
            <div className={selected === id ? 'wrapper_accordion__item___content show' : 'wrapper_accordion__item___content'}>
              {typeof item.answer === 'object' ? (
                <div>
                  {Object.keys(item.answer).map((imageKey, j) => (
                    <img
                      key={j}
                      src={item.answer[imageKey]}
                      alt={imageKey}
                      title={imageKey}
                    />
                  ))}
                </div>
              ) : (
                <FormattedMessage id={`skill.back-end.${id + 1}`} defaultMessage={item.answer} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}
export default AccordionBackEnd;
