const Section = ({ info }) => {
    return (
        <div className={info.class}>
            <div className='col-11 col-lg-6 col-xl-7 col-xxl-5'>
                <img src={info.src} alt={info.alt} />
            </div>
            <div className='text col-10 col-md-8 col-lg-4 col-xxl-3'>{info.text}</div>
        </div>
    )
}

export default Section