import { useState } from "react"
import Inputs from "./Inputs"
import Message from "./Message"

const Form = () => {
    const [formData, setFormData] = useState({ Name: '', Email: '', Subject: '', Message: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="p-2" style={{width: "50vh"}}>
            <h3>Send us a message!</h3>
            <Inputs formData={formData} setFormData={setFormData} />
            <Message formData={formData} setFormData={setFormData} />
            <div className="row mx-4 py-2">
                <button className="btn btn-success">Send</button>
            </div>
        </form>
    )
}

export default Form