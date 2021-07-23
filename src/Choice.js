import * as yup from 'yup'

const choice = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Must input a name')
        .max(24, 'School must have sucked for you.'),
    size: yup.string()
        .required('Must choose a size'),
    pepperoni: yup.boolean(),
    mushrooms: yup.boolean(),
    onions: yup.boolean(),
    peppers: yup.boolean(),
    pinnapple: yup.boolean(),
    comments: yup.string('How can we make your pizza the way you want it?')
})

export default choice