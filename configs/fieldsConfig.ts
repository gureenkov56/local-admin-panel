import {PostDBFields} from "@enums/postFormFields.enum";

type fieldConfig = {
    visible?: boolean
    tag?: 'input' | 'textarea'
}

type FieldsConfig = Record<String[PostDBFields], fieldConfig>

export const fieldsConfigs: FieldsConfig = {
    [PostDBFields.h1]: {
        tag: 'input'
    },
    [PostDBFields.description]: {
        tag: 'textarea'
    },
    [PostDBFields.SEO_title]: {
        tag: 'input'
    },
    [PostDBFields.SEO_description]: {
        tag: 'textarea'
    },
    [PostDBFields.category]: {
        tag: 'input'
    },
    [PostDBFields.post_content]: {
        tag: 'textarea'
    },
    [PostDBFields.pre_text]: {
        tag: 'textarea'
    },
    [PostDBFields.preview_img]: {
        tag: 'input'
    },
    [PostDBFields.pub_date]: {
        tag: 'input'
    },
    [PostDBFields.pub_status]: {
        tag: 'input'
    },
}
