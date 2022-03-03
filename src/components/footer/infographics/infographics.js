function Infographics() {

    let _infographics = [
        { title: "IIFYM Explained", link: "" },
        { title: "Traveling Tips", link: "" },
        { title: "Overcoming Obstacles", link: "" },
        { title: "Do Cards Make You Fat?", link: "" },
        { title: "The Perfect Fat Loss Diet!", link: "" },
        { title: "Sustainable Dieting", link: "" },
        { title: "Alcohol", link: "" },
        { title: "Mind Over Matter", link: "" },
        { title: "Creatine Misonceptions!", link: "" },
        { title: "Fat Loss For Beginners!", link: "" }
    ]
 
    let kckInfographics = [];
    for (let i=0; i<_infographics.length; i++) {
        kckInfographics.push(
            <div className="f-section-child infographic">
                { _infographics[i].title }
            </div>
        )
    }

    return (
        <div className='f-section'>
            <h2>Infographics</h2>
            {kckInfographics}
        </div>
    );
  }
  
  export default Infographics;