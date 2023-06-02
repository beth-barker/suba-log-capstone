import {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import AuthContext from '../store/authContext';


const Header = () => {
    const {userId} = useContext(AuthContext)

   

    return (
        userId ? (<div className='header'>
        <div className='logo'>
            <img className='dive-logo' src="https://static.vecteezy.com/system/resources/previews/005/728/530/original/diving-mask-snorkel-swimwear-snorkelling-solid-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg" alt="" />
            <p>Dive Log</p>
        </div>
        <nav className='nav'>
            <NavLink to='/'>Landing</NavLink>
            <NavLink to="">Home</NavLink>
            <NavLink to="/addDive">Add Dive</NavLink>
            <button>Logout</button>
        </nav>
    </div>) : (
        <div className='header'>
        <div className='logo'>
            <img className='dive-logo' src="https://static.vecteezy.com/system/resources/previews/005/728/530/original/diving-mask-snorkel-swimwear-snorkelling-solid-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg" alt="" />
            <p>Dive Log</p>
        </div>
    </div>
    )
    );
}

export default Header;