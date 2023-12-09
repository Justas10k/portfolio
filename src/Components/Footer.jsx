import '../Styles/Footer.css'

import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

function Footer() {
  return (
    <footer>
      <div className='con footer-con'>
        <div className='centered'>
          <p className='text-white p-0 m-0'>Copyright © 2023. All rights are reserved</p>
        </div>

        <span className='icon'>
              <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/justas-stankevicius-430119293/">
                <IconBrandLinkedin className='Header-icon text-white' size={32} strokeWidth={2} />
              </a>
              <a className='p-3' aria-label="linkedin" rel="noreferrer" target="_blank" href="https://github.com/Justas10k">
                <IconBrandGithub className='Header-icon text-white' size={32} strokeWidth={2} />
              </a>
            </span>
      </div>
    </footer>
  )
}

export default Footer