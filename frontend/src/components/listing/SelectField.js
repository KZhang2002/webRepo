export const SelectField = ({ label, value, setValue, options, optionValueKey, optionLabelKey }) => {
    return <>
        <div className="form-group mb-3">
            <label>{label}</label>
            <select
                name={label}
                value={value}
                onChange={event => setValue(event.target.value)}
                className="form-select mt-2">
                { <option></option> }
                {
                    options.map((option) => <option key={option[optionValueKey]}
                        value={ optionValueKey ? option[optionValueKey] : option }>
                        { optionLabelKey ? option[optionLabelKey] : optionValueKey
                            ? option[optionValueKey] : option }
                    </option>)
                }
            </select>
        </div>
    </>;
}