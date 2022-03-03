import './footer.css';
import Infographics from './infographics/infographics';
import Socials from './socials/socials';
import Clips from './clips/clips';

function Footer() {
  return (
      <footer className='footer'>
        <Infographics />
        <Socials />
        <Clips />
      </footer>
  );
}

export default Footer;