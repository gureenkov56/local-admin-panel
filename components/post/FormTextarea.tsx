import {FormItemProps} from "./types/types";

export function FormTextarea({name, data}: FormItemProps) {
    return(
        <div>
            <label htmlFor={name}>{name}</label>
            <div>
                    <textarea

                        id={name}
                        name={name}
                        defaultValue={data}
                        rows="5"
                    />
            </div>
        </div>
    )
}
