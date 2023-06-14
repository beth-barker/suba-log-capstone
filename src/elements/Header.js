import {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../store/authContext';
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()

    console.log(authCtx)

    return (
        authCtx.userId ? (<div className='flex bg-seablue items-center justify-between h-24'>
        <div className='logo flex items-center'>
            <img className='w-20 rounded-lg m-3 rounded-2xl ' src="https://static.vecteezy.com/system/resources/previews/005/728/530/original/diving-mask-snorkel-swimwear-snorkelling-solid-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg" alt="" />
            <p className='font-logo text-3xl ml-3'>Let's Dive! </p>
        </div>
        <nav className='flex w-3/12 h-full text-lg justify-end mx-7 p-3 font-medium items-end'>
            {/* <NavLink to='/'>Landing</NavLink> */}
            <NavLink to="/" className="pr-3 border-r border-black hover:shadow-md">Dive Log</NavLink>
            <NavLink to="/addDive" className="px-3 border-r border-black hover:shadow-md">Add Dive</NavLink>
            <button className='pl-3 hover:shadow-md' onClick={()=> {authCtx.logout()
            navigate('/auth')}}>Logout</button>
        </nav>
    </div>) : (
        <div className='flex bg-seablue h-24 items-center justify-between'>
        <div className='logo flex items-center'>
            <img className='w-20 rounded-lg m-3 rounded-2xl ' src="https://static.vecteezy.com/system/resources/previews/005/728/530/original/diving-mask-snorkel-swimwear-snorkelling-solid-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg" alt="" />
            <p className='font-logo text-3xl ml-3'>Let's Dive! </p>
        </div>
    </div>
    )
    );
}

export default Header;