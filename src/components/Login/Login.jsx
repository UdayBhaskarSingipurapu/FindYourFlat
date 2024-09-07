import './Login.css'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { UserLoginContext } from '../../contexts/userLoginContext/userLoginContext'
import { useNavigate } from 'react-router-dom'
function Login() {
  let {loginUser,status}=useContext(UserLoginContext)
  let {register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate()
  function handleForm(obj){
    loginUser(obj)
  }
  useEffect(()=>{
    if(status===true){
      navigate('/user-profile')
    }
  },[status])
  return (
    <div>
      <h1 className='text-center mt-4'>Login</h1>
      <form className='card mx-auto col-md-8 col-lg-4 col-sm-12 mt-5 bg-light p-3' onSubmit={handleSubmit(handleForm)}>
            <div className="mb-3">
              <label className='form-label' htmlFor="username">Username</label>
              <input className='form-control' type="text" {...register('username',{required:true})} id="username" />
              {errors.username?.type==='required'&& <p className='text-danger'>*Username is required</p>}
            </div>
            <div className="mb-3">
              <label className='form-label' htmlFor="password">Password</label>
              <input className='form-control' type="password" {...register('password',{required:true})} id="password" />
              {errors.password?.type==='required'&& <p className='text-danger'>*Password is required</p>}
            </div>
            <button type="submit" className='m-auto text-center btn btn-success'>Login</button>
          </form>
    </div>
  )
}

export default Login
