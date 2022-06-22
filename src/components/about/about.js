import Default from '../Default/Default';
import Content from './Content/Content';
import './About.css';

const About = () => {

    const children = <>
        <Content />
    </>

    return (
        <Default children={children} />
    );
}
  
export default About;