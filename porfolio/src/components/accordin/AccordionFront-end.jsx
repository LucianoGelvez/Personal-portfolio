import { useState } from 'react';
import './Accordion.css';
import html from '../../images/icons/html.svg'
import css from '../../images/icons/css.svg'
import javaScript from '../../images/icons/javascript.svg'
import react from '../../images/icons/react.svg'
import sass from '../../images/icons/sass.svg'
import figma from '../../images/icons/figma.svg'
import { FormattedMessage } from 'react-intl';


const AccordionFrontEnd = () => {
  const [selected, setSelected] = useState(3)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const dataFrontEnd = [
    {
      id: 1,
      question: "¿Qué lenguajes de programación utilizo para el Front-end?",
      answer: "Domino lenguajes como HTML, CSS y JavaScript para la creación de interfaces de usuario interactivas y atractivas."
    },
    {
      id: 2,
      question: "Frameworks y Bibliotecas",
      answer: "Tengo experiencia en el uso de frameworks y bibliotecas populares como React, Bootstrap, Material UI, Formik, Yup, Axios, aprendiendo Typescript para el desarrollo web."
    },
    {
      id: 3,
      question: "Diseño Responsivo",
      answer: "Puedo crear sitios web que se adaptan a diferentes tamaños de pantalla y dispositivos, utilizando CSS y media queries."
    },
    {
      id: 4,
      question: "Tecnologías de Front-end",
      answer: {
        html: html,
        css: css,
        javaScript: javaScript,
        react: react,
        sass: sass,
        figma: figma
      }
    }
  ]

  return (
    <div className='wrapper'>
      <div className='wrapper_accordion'>
        {dataFrontEnd.map((item, id) => (
          <div key={id} className='wrapper_accordion__item'>
            <div className='wrapper_accordion__item___title' onClick={() => toggle(id)}>
              <h3><FormattedMessage id={`skill.front-end.tittle.${id + 1}`} defaultMessage={item.question} /></h3>
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
                    />
                  ))}
                </div>
              ) : (
                <FormattedMessage id={`skill.front-end.${id + 1}`} defaultMessage={item.answer} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}
export default AccordionFrontEnd;
