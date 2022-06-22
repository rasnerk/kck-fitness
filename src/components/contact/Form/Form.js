import { useState } from "react"
import Inputs from "./Inputs"
import Message from "./Message"
import { send } from "emailjs-com"

const Form = () => {
    const [formData, setFormData] = useState({ Name: '', Email: '', Subject: '', Message: '' })
    const [alert, setAlert] = useState({display: false, type: '', message: ''})
    const handleSubmit = (e) => {
        e.preventDefault()
        send(
            process.env.REACT_APP_EMAIL_SERVICE_ID, 
            process.env.REACT_APP_EMAIL_TEMPLATE, 
            formData,
            process.env.REACT_APP_EMAIL_ID 
        ).then(response => {
            setAlert({...alert, display: !alert.display, type: "alert-success", message: "Email Sent Successfully!"})
        }).catch(err => {
            setAlert({...alert, display: !alert.display, type: "alert-danger", message: "Failed to send Email!"})
        })
    }

    return (
        <>
            {alert.display &&
            <div className={alert.type + " alert alert-dismissible fade show"} role='alert' style={{position: 'absolute'}}>
                {alert.message}
                <button onClick={() => setAlert(prev => !prev.display)} type="button" className="btn btn-sm close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            }
            <form onSubmit={handleSubmit} className="p-2" style={{width: "50vh"}}>
                <h3>Send us a message!</h3>
                <Inputs formData={formData} setFormData={setFormData} />
                <Message formData={formData} setFormData={setFormData} />
                <div className="row mx-4 py-2">
                    <button className="btn btn-success">Send</button>
                </div>
            </form>
        </>
    )
}

export default Form