import { required, email, sameAs } from 'vuelidate/lib/validators';


export default {

    email: {
        required,
        email,
    },
    
    password: {
        required,
    },

    passwordConfirm: {
        sameAsPassword: sameAs('password'),
    },
}