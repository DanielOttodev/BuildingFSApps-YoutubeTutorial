import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Hooks/useAuth';
import Logo from '../assets/logo.svg'

const LoginForm = () => {
    const {onLogin} = useAuth();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    return  <div className='p-1 rounded  text-center shadow w-96 mx-auto bg-gray-200'>
                <form className='py-5'>
                    <img className="mx-auto" src={Logo} width={64}/>
                    <div className='text-center flex flex-col gap-3 w-64 mx-auto '>
                    <label className='text-left font-semibold text-sm'>Username</label>
                    <input onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder='JohnDoe123'  className='p-2 border font-semibold text-orange-400'></input>
                    <label className='text-left font-semibold'>Password</label>
                    <input onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder='secret'  className='p-2 border font-semibold text-orange-400'></input>
                    <button onClick={(e) => {
                        e.preventDefault();
                        onLogin({email:email,password:password})} } className='w-full p-2 bg-orange-400 text-white rounded-lg'>Sign In</button>
                    <div className='mt-3 flex justify-between'>
                        <Link to="/" className='text-sm font-semibold text-orange-400 p-1'>Sign Up</Link>
                        <Link to="/" className='text-sm text-gray-500 p-1'>Forgot password?</Link>
                    </div>          
                    </div>        
                 </form>
          </div>

}
export default LoginForm