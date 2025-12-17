import Checkbox from '@mui/material/Checkbox';
import './AuthForm.css';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router';

const AuthForm = ({ newUser, handleSubmit, onBlurHandler, navigateUrl }) => {
    return (
        <div>
            <div className="title mb-4">
                <h2>{newUser ? 'Create an account' : 'Login'}</h2>
            </div>
            <form onSubmit={handleSubmit}>
                {
                    newUser && (
                        <>
                            <div className="form-group mb-4">
                                <TextField fullWidth label='First Name' name='firstName' onBlur={onBlurHandler} variant='standard' />
                            </div>
                            <div className="form-group mb-4">
                                <TextField fullWidth label='Last Name' name='lastName' onBlur={onBlurHandler} variant='standard' />
                            </div>
                        </>
                    )
                }
                <div className="form-group mb-4">
                    <TextField fullWidth label='Username Or Email' name="email" onBlur={onBlurHandler} variant='standard' />
                </div>
                <div className="form-group mb-4">
                    <TextField fullWidth label="Password" name='password' onBlur={onBlurHandler} variant='standard' />
                </div>
                {
                    newUser && (<div className="form-group mb-4">
                        <TextField fullWidth label="Confirm Password" name='confirmPassword' onBlur={onBlurHandler} variant='standard' />
                    </div>)
                }

                {
                    !newUser && (
                        <div className="form-group mb-3 d-flex justify-content-between align-items-center">
                            <div className="left">
                                <Checkbox id='is-remember' />
                                <label htmlFor="is-remember" style={{ verticalAlign: 'middle' }}>Remember Me</label>
                            </div>
                            <div className="right">
                                <Link>Forgot Password</Link>
                            </div>
                        </div>
                    )
                }

                <div className="form-group mt-5 mb-3">
                    <button className='primary-button' style={{ width: '100%', textTransform: 'capitalize' }}>{newUser ? 'Create an account' : 'Login'}</button>
                </div>
                <p className='bottom-text'>{!newUser ? 'Don\'t have an account?' : 'Already have an account?'} <Link to={`/${newUser ? 'login' : 'signup'}`} state={navigateUrl}>{!newUser ? 'Create an account' : 'Login'}</Link></p>
            </form>

        </div>
    );
};

export default AuthForm;