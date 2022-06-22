const Inputs = ({ formData, setFormData }) => {
    const inputs = [ {label: "Name"}, {label: "Email"}, {label: "Subject"} ]
    return (
        <>
            {inputs.map(input => (
                <div key={input.label} className="form-group row m-2">
                    <label htmlFor={input.label} className="col-sm-2 col-form-label"><b>{input.label}</b></label>
                    <div className="col-sm-10">
                        <input onChange={(e) => setFormData({ ...formData, [input.label]: e.target.value })} type="text" className="form-control" id={input.label} placeholder={input.label + "..."} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default Inputs