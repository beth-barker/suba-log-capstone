import {useState, useContext} from 'react'
import axios from 'axios';
import './Auth.css';
import AuthContext from '../store/authContext';
 
const Auth = () => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [register, setRegister] = useState(true)
   const authCtx = useContext(AuthContext)

   console.log(authCtx)

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
        <form onSubmit={e => submitHandler(e)}>
            <input type="text" placeholder='username' onChange={e => setUsername(e.target.value)} />
            <input type="text" placeholder='password' onChange={e => setPassword(e.target.value)} />
            <button>Register</button>
        </form>
       ) : (
        <form onSubmit={e => submitHandler(e)}>
            <input type="text" placeholder='username' onChange={e => setUsername(e.target.value)} />
            <input type="text" placeholder='password' onChange={e => setPassword(e.target.value)} />
            <button>Login</button>
        </form>
       )}

        <button onClick={() => setRegister(!setRegister)}>Need to {register ? 'login?' : 'register?'}</button>
       </>

   )
}
 
export default Auth