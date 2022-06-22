const Message = ({ formData, setFormData }) => {
    return (
        <div className="row m-2 py-2">
            <label htmlFor="message" className="col-sm-2 col-form-label"><b>Message</b></label>
            <div className="col-sm-12">
                <textarea onChange={(e) => setFormData({ ...formData, Message: e.target.value })} id="message" rows={6} className="form-control" />
            </div>
        </div>
    )
}

export default Message