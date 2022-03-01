import './content.css';
import Logo from './logo/logo';
import Info from './info/info';
import Coaches from './coaches/coaches';

function Content() {
  return (
      <div className="content">
          <Logo />
          <Info />
          <Coaches />
      </div>
  );
}

export default Content;