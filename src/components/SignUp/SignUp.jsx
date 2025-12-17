import { useContext, useState } from 'react';
import './SignUp.css';
import AuthForm from '../AuthForm/AuthForm';
import LoginWithProvider from '../LoginWithProvider/LoginWithProvider';
import { createNewUserWithEmailAndPassword, signInWithGoogle } from '../AuthForm/AuthManager';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router';

const SignUp = () => {
    const [userData, setUserData] = useState({});
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || { from: '/' };
    const handleSubmit = event => {
        event.preventDefault();
        const isValid = Boolean(userData.firstName && userData.lastName && userData.email && userData.password && userData.confirmPassword);
        if (isValid) {
            createNewUserWithEmailAndPassword(userData.firstName, userData.lastName, userData.email, userData.password).then(user => {
                if(user.isSignedIn){
                    setUser(user);
                    navigate(from.from);
                }
                console.log('res', user);
            })
        }
    }
    const handleGoogleSignUp = () => {
        signInWithGoogle().then(user => {
            if(user.isSignedIn){
                setUser(user);
                navigate(from.from);
            }
        })
    }
    const onBlurHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        let isValid = false;
        if (name === 'firstName') {
            isValid = value.length <= 5;
        } else if (name === 'lastName') {
            isValid = value.length <= 5;
        } else if (name === 'email') {
            isValid = /\S+@\S+\.\S+/.test(value);
        } else if (name === 'password') {
            const isPasswordValid = value.length > 6;
            const isContainNumber = /\d{1}/.test(value);
            isValid = isPasswordValid && isContainNumber;
        } else if (name === 'confirmPassword') {
            isValid = userData.password === value;
        }
        if (isValid) {
            const newData = { ...userData };
            newData[name] = value;
            setUserData(newData);
        }
    }

    return (
        <div style={{ height: '100%', background: 'white', position: 'relative', zIndex: 8 }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', height: '100%', paddingTop: '125px' }}>
                <div className="auth-container">
                    <div className="auth-form-container">
                        <AuthForm newUser={true}  handleSubmit={handleSubmit} onBlurHandler={onBlurHandler} navigateUrl={from} />
                    </div>
                    <div className="divider">
                        <hr />
                        <span>Or</span>
                        <hr />
                    </div>
                    <div className="btn-login">
                        <LoginWithProvider loginHandler={handleGoogleSignUp} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;