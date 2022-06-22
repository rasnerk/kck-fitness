import { kckSocials } from "../../lib/socials";

const Socials = () => {
    return (
        <div className='f-section'>
            <h2>Social Media & Contact</h2>
            {kckSocials.map(social => (
                <div key={social.name} className="f-section-child">
                    <img src={social.logo} alt="logo" style={{width: '40px', height: '40px'}} />
                    <span className="social-name">{social.name}</span>
                </div>
            ))}
        </div>
    );
}
  
export default Socials;