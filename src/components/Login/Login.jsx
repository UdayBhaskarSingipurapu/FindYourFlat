import './Login.css'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { UserLoginContext } from '../../contexts/userLoginContext/userLoginContext'
import { useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
function Login() {
  let {loginUser,status}=useContext(UserLoginContext)
  let {register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate()
  function handleForm(obj){
    loginUser(obj)
  }
  let navigateToRegister = () =>{
    navigate('../register')
  }
  useEffect(()=>{
    if(status===true){
      navigate('/user-profile')
    }
  },[status])
  return (
    <div className='cards'>
      <h1 className='text-center mt-4'>Login</h1>
      
        <form id='form1' className='card mx-auto col-md-8 col-lg-4 col-sm-12 mt-5  p-3 '  onSubmit={handleSubmit(handleForm)}>
            <div className="mb-4 mt-3">
              <label className='form-label fs-5 fw-bold ' htmlFor="username"><FaUser className='me-2'/>Username</label>
              <input className='form-control'  type="text" {...register('username',{required:true})} id="username" />
              {errors.username?.type==='required'&& <p className='text-danger'>*Username is required</p>}
            </div>
            <div className="mb-4 mt-1">
              <label className='form-label fs-5 fw-bold' htmlFor="password"><RiLockPasswordFill className='me-2'/>Password</label>
              <input className='form-control' type="password" {...register('password',{required:true})} id="password" />
              {errors.password?.type==='required'&& <p className='text-danger'>*Password is required</p>}
            </div>
            <h5 className="text-center">Don't have an account?<span onClick={navigateToRegister} className="ptr mx-1 text-primary">Register</span></h5>
            <button id='btn1' type="submit" className='m-auto text-center btn btn-success fw-bold'>Register</button>
          </form>
       
    </div>
  )
}

export default Login
