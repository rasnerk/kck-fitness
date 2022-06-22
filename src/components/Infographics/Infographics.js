import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Default from '../Default/Default'

const Infographics = () => {
    const location = useLocation()
    const [graphic, setGraphic] = useState(null)
    
    useEffect(() => {
        location.state.graphic ? setGraphic(location.state.graphic) : setGraphic(null);
    },[location])

    const children = graphic && <img src={graphic} alt='Infographic' />

    return (
        <Default children={children} />
    )
}

export default Infographics