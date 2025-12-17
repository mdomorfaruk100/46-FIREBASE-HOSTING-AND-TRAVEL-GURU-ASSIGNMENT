import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LoginWithProvider.css';

const LoginWithProvider = ({loginHandler}) => {
    
    return (
        <div>
            <button className='login-button'>
                <FontAwesomeIcon className="facebook" icon={faFacebook} />
                <span>Continue With Facebook</span>
            </button>
            <button className='login-button' onClick={loginHandler}>
                <FontAwesomeIcon icon={faGoogle} className='google' />
                <span>Continue With Google</span>
            </button>
        </div>
    );
};

export default LoginWithProvider;