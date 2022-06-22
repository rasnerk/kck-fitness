const Text = ({ text, href, hrefText }) => {
    return (
        href ? 
        <div className="text col-10 col-lg-6">{text} <br/> <a href={href}>{hrefText}</a></div>
        :
        <div className='text col-10 col-md-6 col-lg-4 col-xl-3'>{text}</div>
    )
}

export default Text