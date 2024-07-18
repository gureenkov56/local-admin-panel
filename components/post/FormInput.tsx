import {FormItemProps} from "./types/types";


export function FormInput({name, data}: FormItemProps) {
    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <div>
                <input
                    id={name}
                    name={name}
                    type="text"
                    defaultValue={data}
                />
            </div>
        </div>
    )
}
