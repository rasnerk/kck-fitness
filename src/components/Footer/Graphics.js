import { kckInfographics } from "../../lib/infographics";
import { useNavigate } from 'react-router-dom'

const Graphics = () => {
    const navigate = useNavigate()

    return (
        <div className='f-section'>
            <h2>Infographics</h2>
            {kckInfographics.map(info => (
                <div key={info.title} onClick={() => navigate('/infographics', {state: {graphic: info.graphic} } )} className="f-section-child infographic">
                    {info.title}
                </div>
            ))}
        </div>
    );
}
  
export default Graphics;