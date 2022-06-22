import { clips } from "../../lib/clips";

const Clips = () => {
    return (
        <div className='f-section'>
            <h2>Clips</h2>
            {clips.map(clip => (
                <div key={clip.name} className="f-section-child clip">
                    <span>{clip.name}</span>
                </div>
            ))}
        </div>
    );
}
  
export default Clips;