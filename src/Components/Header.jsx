import '../Styles/Header.css'
import HandEmote from '../img/HandEmote.png'
import flag from '../img/flag.png'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';


const Header = () => {


  return (
  <>

    <header  id='home' >
      <div className='Portfolio-header con'>
        <div className='box-text-image'>
        <div className='header-text '>
          <div className='text-width'>
            <h1 className='Header-text-h1'>Front-End React <br/> Developer       <img className='Handimg' src=  {HandEmote}/></h1>
            <p className='header-text-p'>Hi, I&apos;m Justas Stankevičius A passionate Front-end React Developer based in Kaunas, Lithuania <img className='flagimg'  src={flag}/> </p>
            <span className='icon'>
              <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/justas-stankevicius-430119293/">
                <IconBrandLinkedin className='Header-icon' size={32} strokeWidth={2} />
              </a>
              <a className='p-3' aria-label="linkedin" rel="noreferrer" target="_blank" href="https://github.com/Justas10k">
                <IconBrandGithub className='Header-icon' size={32} strokeWidth={2} />
              </a>
            </span>

            <section className='d-flex skills'>
              <p className='Skills-line'>Tech Stack</p>

                <ul className='skills-con'>
                  <li className='skill-icon '><img src="https://skillicons.dev/icons?i=html" alt="skill-icon"/>
                   <img className="skill-img" src="https://skillicons.dev/icons?i=css" alt="skill-icon"/></li>
                  <li className='skill-icon '><img src="https://skillicons.dev/icons?i=bootstrap" alt="skill-icon"/>
                   <img className="skill-img" src="https://skillicons.dev/icons?i=sass" alt="skill-icon"/></li>
                   <li className='skill-icon'><img src="https://skillicons.dev/icons?i=js" alt="skill-icon"/>
                   <img className="skill-img" src="https://skillicons.dev/icons?i=react" alt="skill-icon"/></li>
                </ul>
            </section>
            </div>
        </div>
        <div className='header-image'>
        <div className="hero-img"></div>
        </div>
        </div>
        </div>
    </header>
  </>
  )
}

export default Header;