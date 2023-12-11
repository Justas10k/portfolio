import '../Styles/Projects.css'

import Probox from './Probox';
import coiny  from '../img/coiny-full.jpeg' 
import Sudoku  from '../img/sudoku.jpeg' 
import freedomvpn from '../img/vpnpage.jpeg'

const Projects = () => {

  return (
      <section id="projects" className="project">
        <div className="con">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <Probox
                title="Coiny"
                img={coiny}
                date="(December 2023)"
                description="Coiny is a virtual cryptocurrency tracking website that utilizes Rest API to obtain real-time updates on cryptocurrency information. "
                techno1="React"
                techno2="CSS"
                code="https://github.com/Justas10k/CoinyCurrency"
                demo="https://justas10k.github.io/CoinyCurrency/"
                scrollY="-64%"
                icon="💲"
              />

              <Probox
                title="Sudoku"
                date="(February 2022)"
                img={Sudoku}
                description="Sudoku is a number-placement puzzle that consists of a 9x9 grid divided into nine 3x3 subgrids. The objective is to fill in the grid with digits from 1 to 9, ensuring that each row, column, and subgrid contains every number exactly once."
                techno1="JavaScript"
                techno2="CSS"
                code="https://github.com/Justas10k/Sudoku"
                demo="https://justas10k.github.io/Sudoku/"
                scrollY="-15%"
                icon="🧠"
                cName="reversed-proj"
              />

              <Probox
                title="Freedom VPN"
                img={freedomvpn}
                date="(February 2021)"
                description="FreedomVPN is a comprehensive website dedicated to providing users with detailed information about Virtual Private Networks (VPNs)."
                techno1="Bootstrap"
                techno2="CSS"
                code="https://github.com/Justas10k/FreedomVPN_Website"
                demo="https://justas10k.github.io/FreedomVPN_Website/"
                scrollY="-66%"
                icon="🕊️"
              />

            </div>
          </div>
        </div>
      </section>
  );
};
export default Projects;