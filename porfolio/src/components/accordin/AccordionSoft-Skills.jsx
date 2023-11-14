import { useState } from 'react';
import './Accordion.css';
import gitlab from '../../images/icons/gitlab.svg'
import github from '../../images/icons/github2.svg'
import skype from '../../images/icons/skype.svg'
import trello from '../../images/icons/trello.svg'
import slack from '../../images/icons/slack.svg'
import discord from '../../images/icons/discord.svg'
import { FormattedMessage } from 'react-intl';

const AccordionSoftSkills = () => {
  const [selected, setSelected] = useState(3)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const dataSoftSkills = [
    {
      id: 1,
      question: "Habilidades de comunicación",
      answer: "Me considero una persona con fuertes habilidades de comunicación, capaz de explicar contenido técnico a personas no técnicas."
    },
    {
      id: 2,
      question: "Trabajo en equipo",
      answer: "He trabajado eficazmente como parte de varios equipos de desarrollo de software, cumpliendo con los plazos y colaborando proactivamente con los compañeros de equipo."
    },
    {
      id: 3,
      question: "Resolución de problemas",
      answer: "Poseo excelentes habilidades"
    },
    {
      id: 4,
      question: "Herramientas Diarias de Desarrollo y Colaboración",
      answer: {
        github: github,
        gitlab: gitlab,
        skype: skype,
        trello: trello,
        slack: slack,
        discord: discord
      }
    }
  ]


  return (
    <div className='wrapper'>
      <div className='wrapper_accordion'>
        {dataSoftSkills.map((item, id) => (
          <div key={id} className='wrapper_accordion__item'>
            <div className='wrapper_accordion__item___title' onClick={() => toggle(id)}>
              <h3><FormattedMessage id={`skill.soft-skill.tittle.${id + 1}`} defaultMessage={item.question} /></h3>
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
                <FormattedMessage id={`skill.soft-skill.${id + 1}`} defaultMessage={item.answer} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}
export default AccordionSoftSkills;
