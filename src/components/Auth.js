import {useState, useContext} from 'react'
import axios from 'axios';
import './Auth.css';
import AuthContext from '../store/authContext';
 
const Auth = () => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [register, setRegister] = useState(false)
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
       }).catch(err => alert(err.response.data))
 
       console.log('submitHandler called')
   }
 
   return (
    <>
       {register ? (
        <div className='flex items-center justify-center mt-32 h-72'>
        <form onSubmit={e => submitHandler(e)} className='border border-gray-400 flex flex-col justify-evenly w-1/5 p-2 rounded-lg h-80 shadow-lg'>
            <p className='font-medium text-xl m-5'>SIGN UP</p>
            <input className='border-b-2 border-gray-400 p-1 mb-3 mx-3'type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} />
            <input className='border-b-2 border-gray-400 p-1 m-3' type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
            <div className='flex flex-col mb-3 justify-end items-center mt-4'>
                <button className='bg-lighto  bg-gray-200 rounded text-base text-coral font-medium text-lg w-7/12'>Register</button>
            </div>
        </form>
        </div>
       ) : (
        <div className='flex items-center justify-center mt-32 h-72'>
        <form  onSubmit={e => submitHandler(e)} className='border border-gray-400 flex flex-col justify-evenly w-1/5 p-2 rounded-lg h-80 shadow-lg'>
            <p className='font-medium text-xl m-5'>LOG IN</p>
            <input className='border-b-2 border-gray-400 p-1 mb-3 mx-3' type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} />
            <input className='border-b-2 border-gray-400 p-1 m-3' type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
            <div className='flex flex-col mb-3 justify-end items-center mt-4'>
                <button className='bg-lighto  bg-gray-200 rounded text-base text-coral font-medium text-lg w-7/12'>Login</button>
            </div>
        </form>
        </div>
       )}

        <button className='m-10  p-2 text-lg text-seablue font-medium' onClick={() => setRegister(true)}>{register ? 'Need to Login?' : 'Need to Register?'}</button>
       </>

   )
}
 
export default Auth