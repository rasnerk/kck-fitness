import Default from '../Default/Default';
import Form from './Form/Form';

const Contact = () => {
    
    const children = <>
        <div className='d-flex justify-content-center'>
            <Form />
        </div>
    </>

    return (
        <Default children={children} />
    );
}
  
export default Contact;