import Pic from "./Pic"
import Text from "./Text"

const Content = () => {
    const aboutContent = [
        { img: "imgs/brothers.jpg", alt: "Keifer Cody & Kane", text: "KCK Fitness was created on the idea that health & fitness should NOT be an uphill battle. Keifer, Cody, and Kane have been aiding in making each and everyones health & fitness battle more of a journey. With smaller sustainable steps along the way. Don't let your health or fitness goals conquer you!"},
        { img: "imgs/show-ready.jpg", alt: "Keifer Show Ready", text: "Want to see more about Keifer's physique show?", special: true, href: "/show", hrefText: "Keifer's Physique Show" },
        { img: "imgs/ck.jpg", alt: "Cody & Keifer" }
    ]

    return (
        <div className="d-flex justify-content-evenly flex-wrap about">
            {aboutContent.map( (content,i) => (
                <div key={i} className='section d-flex flex-wrap justify-content-center justify-content-lg-evenly' style={{alignItems: "center"}}>
                    <Pic src={content.img} alt={content.alt} />
                    <Text text={content.text} href={content.href} hrefText={content.hrefText} />
                </div>
            ))}
        </div>
    )
}

export default Content