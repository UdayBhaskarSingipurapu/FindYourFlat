
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useForm } from "react-hook-form"
import './Register.css'
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function Register() {
  let {register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate()
  function handleForm(obj){
    console.log(obj);
  }
  let navigateToLogin = ()=>{
    navigate('../login')
  }
  return (
    <div>
      <h1 className="text-center mt-4">Register</h1>
      <form id="form"className='card mx-auto col-md-8 col-lg-4 col-sm-12 mt-5  p-3' onSubmit={handleSubmit(handleForm)}>
        <div className="mb-3">
          <label className='form-label fw-bold' htmlFor="username"><FaUser className='me-2'/>Username</label>
          <input className='form-control' type="text" {...register('username',{required:true})} id="username" />
          {errors.username?.type==='required'&& <p className='text-danger'>*Username is required</p>}
        </div>
        <div className="mb-3">
          <label className='form-label fw-bold' htmlFor="password"><RiLockPasswordFill className='me-2'/>Password</label>
          <input className='form-control' type="password" {...register('password',{required:true})} id="password" />
          {errors.password?.type==='required'&& <p className='text-danger'>*Password is required</p>}
        </div>
        <div className="mb-3">
          <label className='form-label fw-bold' htmlFor="email"><MdEmail className="me-2"/>Email</label>
          <input className='form-control' type="email" {...register('email',{required:true})} id="email" />
          {errors.email?.type==='required'&& <p className='text-danger'>*Email is required</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label fw-bold"><IoMdContact className="me-2"/>Contact number</label>
          <input type="number" {...register('contact',{required:true})} id="contact" className="form-control" />
          {errors.contact?.type==='required'&& <p className='text-danger'>*Contact number is required</p>}
        </div>
        {/* <label htmlFor="role" className="fw-bold">Type of account</label>
        <div className="mb-3 form-check">
          <div className="form-check my-3">
            <input type="radio"{...register('role',{required:true})} name="role" id="user" className="form-check-input" value={'user'}/>
            <label htmlFor="user" className="form-check-label">User</label>
          </div>
          <div className="form-check my-3">
            <input type="radio" {...register('role',{required:true})} name="role" id="merchant" className="form-check-input" value={'merchant'}/>
            <label htmlFor="merchant" className="form-check-label">Merchant</label>
          </div>
          {errors.role?.type==='required'&& <p className='text-danger'>*Role is required</p>}
        </div> */}

        <h5 className="text-center">Already has an account?<span onClick={navigateToLogin} className="ptr mx-1 text-primary">Login</span></h5>
        <button type="submit" id="btn" className='m-auto text-center btn btn-success' onClick={navigateToLogin}>Register</button>
      </form>
    </div>
  )
}

export default Register
