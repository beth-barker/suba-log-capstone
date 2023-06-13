import {useState, useContext} from 'react'
import axios from 'axios';
import './Auth.css';
import AuthContext from '../store/authContext';
 
const Auth = () => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [register, setRegister] = useState(true)
   const authCtx = useContext(AuthContext)

   const body = {
        username: username,
        password: password
   }
 
   const submitHandler = e => {
       e.preventDefault()

       axios.post(register ? `/api/register` : `/api/login`, body)
       .then((res) => {
        authCtx.login(res.data.userId)
       }).catch(err => console.log(err))
 
       console.log('submitHandler called')
   }
 
   return (
    <>
       {register ? (
        <div className='flex items-center justify-center mt-40 '>
        <form onSubmit={e => submitHandler(e)} className='border border-gray-300 flex flex-col w-500  p-2 rounded-lg'>
            <p>SIGN UP</p>
            <input className='border-b-2 border-gray-400 p-1 m-3'type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} />
            <input className='border-b-2 border-gray-400 p-1 m-3' type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
            <div>
                <button className='bg-lighto m-5 bg-gray-200 rounded text-base text-cream w-7/12'>Register</button>
            </div>
        </form>
        </div>
       ) : (
        <div className='flex items-center justify-center mt-40'>
        <form  onSubmit={e => submitHandler(e)} className='border border-gray-300 flex flex-col w-500 p-2 rounded-lg'>
            <p>LOG IN</p>
            <input className='border-b-2 border-gray-400 p-1 m-3' type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} />
            <input className='border-b-2 border-gray-400 p-1 m-3' type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
            <div>
                <button className='bg-lighto m-5 bg-gray-200 rounded text-base text-coral  w-7/12'>Login</button>
            </div>
        </form>
        </div>
       )}

        <button className='m-10 rounded bg-coral p-2 text-m' onClick={() => setRegister(!setRegister)}>Need to {register ? 'login?' : 'register?'}</button>
       </>

   )
}
 
export default Auth