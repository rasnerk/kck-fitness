const Pic = ({ src, alt }) => {
    return (
        <img className="about-img" src={src} alt={alt} style={{maxHeight: "600px"}} />
    )
}

export default Pic