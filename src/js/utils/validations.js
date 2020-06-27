import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators';


export default {

    email: {
        required,
        max: maxLength(100),
        email,
    },
    
    password: {
        required,
        max: maxLength(100),
    },

    passwordConfirm: {
        sameAsPassword: sameAs('password'),
    },
}