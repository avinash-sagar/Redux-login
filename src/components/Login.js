import React, { useState  } from 'react'
import {useDispatch} from "react-redux"
import { login } from '../redux/userSlice'
import "./Login.css"

const Login = () => {
  const [name, setName]= useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();


  const handleSubmit=(e)=>{
    e.preventDefaulte();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true
      })
    )
  }

  return (
   <div className="outer">
      
        <form className='logIn' onSubmit={(e)=> handleSubmit(e)} >
        <h1>Login-Form</h1>
        <input className='in' type="text" placeholder='Name' value={name} onChange={e=> setName(e.target.value)}/>
        <input className='in' type="email" placeholder='Email' value={email}
        onChange={e=> setEmail(e.target.value)} />
        <input className='in' type="password" placeholder='password' value={password}
        onChange={e=> setPassword(e.target.value)} />
        <button className='btn' type='submit'>SUBMIT</button>
      </form>
   
   </div>
  )
}

export default Login