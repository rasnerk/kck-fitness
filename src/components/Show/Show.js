import Default from '../Default/Default'
import Section from './Section'
import { showInfo } from '../../lib/showInfo'
import './Show.css'

const Show = () => {

    const children = <>
        <h1 style={{borderBottom: "1px solid black", margin: "1em 0"}}>Keifer's Physique Competition</h1>
        {showInfo.map( (info,i) => <Section key={i} info={info} /> )}
        <h1 style={{borderBottom: "1px solid black", margin: "1em 0"}}>The Complete Transformation</h1>
        <div className='sec-1'>
            <div className='im'>
                <img src='imgs/transformation-1.jpg' alt='Keifers Transformation' />
            </div>
            <div className='im'>
                <img src='imgs/transformation-2.jpg' alt='Keifers Transformation' />
            </div>
        </div> 
    </>

    return (
        <Default children={children} />
    )
}

export default Show