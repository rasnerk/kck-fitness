function Clips() {

    let _clips = [
        { name: "Physique Prep", link: "" },
        { name: "Shoulder Burnout", link: "" },
        { name: "Physique Competition Q&A", link: "" }
    ]
 
    let kckClips = [];
    for (let i=0; i<_clips.length; i++) {
        kckClips.push(
            <div className="f-section-child clip">
                <span>{_clips[i].name}</span>
            </div>
        )
    }

    return (
        <div className='f-section'>
            <h2>Clips</h2>
            {kckClips}
        </div>
    );
  }
  
  export default Clips;
