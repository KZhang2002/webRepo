export const TextField = ({label, value, setValue}) => {
    return <>
        <div className="form-group mb-3">
            <label htmlFor="inputName">{label}</label>
            <input 
                name={label}
                className="form-control mt-2"
                id="inputName"
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)} />
        </div>
    </>;
}