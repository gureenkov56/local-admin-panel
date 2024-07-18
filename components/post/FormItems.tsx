import {Post} from "@types/db";
import {fieldsConfigs} from "@configs/fieldsConfig";
import {FormInput} from "./FormInput";
import {FormTextarea} from "./FormTextarea";

type FormItemsProps = {
    postData: Post
}
export function FormItems({postData}: FormItemsProps) {

    return Object.entries(fieldsConfigs)
        .map(([key, value]) => {

            const data = postData[key]

            switch(value.tag) {
                case 'input':
                    return <FormInput key={key} name={key} data={data} />;
                case 'textarea':
                    return <FormTextarea key={key} name={key} data={data} />;
                default:
                    return <p>No block for this tag</p>
            }
        })
}
