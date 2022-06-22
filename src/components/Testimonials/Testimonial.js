const Testimonial = ({data}) => {
    return (
        <div className='testimonial'>
          <h1>{data.client}</h1>
          <div className='before-after'>
            <div className="before">
              <img src={data.before} alt='before' />
            </div>
            <div className="after">
              <img src={data.after} alt='after' />
            </div>
          </div>
          <div className='review'>
            {data.client === "Keifer" ? 
              <a href={'/show'}>{data.message}</a>
              :
              `"${data.message}"`
            }
          </div>
          <div className='client-name'>
            <span>- {data.client}</span>
          </div>
        </div>
    )
}

export default Testimonial