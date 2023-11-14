
import AboutMe from '../../components/body/aboutMe/AboutMe'
import { Contact } from '../../components/body/contact/Contact'
import Experience from '../../components/body/experience/Experience'
import Projects from '../../components/body/projects/Projects'
import Header from '../../components/header/Header'

const Body = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default Body