import { useState } from 'react';
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in-form-styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [ formFields, setFormfields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormfields = () => {
        setFormfields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormfields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert("Incorect password for Email");
                    break;
                case 'auth/user-not-found':
                    alert("User dont exist");
                    break;
                default:
                    alert(error);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        //console.log(event.target);
        //console.log(event.target.value);
        setFormfields( { ...formFields, [name]: value } );
    }

    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your E-mail and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password"  value={password}/>
                <div className='buttons-container'>
                    <Button type="submit" >Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle} >Google Sign-In</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;