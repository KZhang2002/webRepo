export const TextAreaField = ({label, value, setValue}) => {
    return <>
        <div class="form-group mb-3">
            <label >{label}</label>
            <textarea 
                name={label}
                className="form-control mt-2" 
                value={value}
                onChange={event => setValue(event.target.value)}
                rows="4" />
        </div>
    </>;
}