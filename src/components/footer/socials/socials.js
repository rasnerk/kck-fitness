function Socials() {

    let _socials = [
        { logo: "Instagram-logo", name: "instagram profile", link: "" },
        { logo: "Email-icon", name: "email", link: "" }
    ]
 
    let kckSocials = [];
    for (let i=0; i<_socials.length; i++) {
        kckSocials.push(
            <div className="f-section-child">
                <span>{_socials[i].logo}</span>
                <span>{_socials[i].name}</span>
            </div>
        )
    }

    return (
        <div className='f-section'>
            <h2>Social Media & Contact</h2>
            {kckSocials}
        </div>
    );
  }
  
  export default Socials;