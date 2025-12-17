import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { useLocation, useNavigate } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { logOutUser } from '../AuthForm/AuthManager';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);

    const handleNavigate = () => {
        navigate('/login');
    }

    const handleLogOut = () => {
        logOutUser().then(user => {
            if(!user.isSignedIn){
                setUser(user);
            }
        })
    }

    const black = location.pathname == '/login' || location.pathname == '/signup' || location.pathname == '/search' ? 'black' : '';
    const image = location.pathname == '/login' || location.pathname == '/signup' || location.pathname == '/search' ? 'none' : '';
    const search = location.pathname == '/login' || location.pathname == '/signup' || location.pathname == '/search' ? (<></>) : (<div className="search-box">
        <div className="search">
            <span className="icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input type="text" name="" placeholder='Search Your Destination...' id="" />
        </div>
    </div>);
    return (
        <div className="header">
            <header className='container'>
                <div className="page-logo">
                    <img src={logo} style={{ filter: image, cursor:'pointer' }} alt="logo" height='50px' onClick={()=>navigate('/')} />
                </div>
                {search}
                <div className='nav-items'>
                    <ul style={{ color: black }}>
                        <li>News</li>
                        <li>Destination</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>
                            <button className='primary-button' onClick={() => user.isSignedIn ? handleLogOut() : handleNavigate()}>{user.isSignedIn ? 'Log Out':'Login'}</button>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Header;