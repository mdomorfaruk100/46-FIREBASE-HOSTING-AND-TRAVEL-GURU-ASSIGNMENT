import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import LoginWithProvider from '../LoginWithProvider/LoginWithProvider';
import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { signInUser, signInWithGoogle } from '../AuthForm/AuthManager';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {
    const [userData, setUserData] = useState({});
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || {from:'/'};
    const handleSubmit = event => {
        event.preventDefault();
        const isValid = Boolean(userData.email && userData.password);
        if (isValid) {
            signInUser(userData.email, userData.password).then(user => {
                if(user.isSignedIn){
                    setUser(user);
                    navigate(from.from);
                }
            })
        }
    }

    const signInWithGoogleHandler = () => {
        signInWithGoogle().then(user => {
            if(user.isSignedIn){
                setUser(user);
                navigate(from.from)
            }
        })
    }
    const onBlurHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        let isValid = false;
        if (name === 'email') {
            isValid = /\S+@\S+\.\S+/.test(value);
        } else if (name === 'password') {
            const isPasswordValid = value.length > 6;
            const isContainNumber = /\d{1}/.test(value);
            isValid = isPasswordValid && isContainNumber;
        }

        if (isValid) {
            const newData = { ...userData };
            newData[name] = value;
            setUserData(newData);
        }
    }
    console.log(from);
    return (
        <div style={{ height: '100%', background: 'white', position: 'relative', zIndex: 8 }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <div className="auth-container">
                    <div className="auth-form-container">
                        <AuthForm useAs='login' handleSubmit={handleSubmit} onBlurHandler={onBlurHandler} navigateUrl = {from} />
                    </div>
                    <div className="divider">
                        <hr />
                        <span>Or</span>
                        <hr />
                    </div>
                    <div className="btn-login">
                        <LoginWithProvider loginHandler={signInWithGoogleHandler} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;