import { useForm } from "react-hook-form"
function Register() {
  let {register,handleSubmit,formState:{errors}}=useForm()
  function handleForm(obj){
    console.log(obj);
  }
  return (
    <div>
      <h1 className="text-center mt-4">Register</h1>
      <form className='card mx-auto col-md-8 col-lg-6 col-sm-12 mt-5 bg-light p-3' onSubmit={handleSubmit(handleForm)}>
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
            <div className="mb-3">
              <label className='form-label' htmlFor="email">Email</label>
              <input className='form-control' type="email" {...register('email',{required:true})} id="email" />
              {errors.email?.type==='required'&& <p className='text-danger'>*Email is required</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="contact" className="form-label">Contact number</label>
              <input type="number" {...register('contact',{required:true})} id="contact" className="form-control" />
              {errors.contact?.type==='required'&& <p className='text-danger'>*Contact number is required</p>}
            </div>
            <label htmlFor="role">Type of account</label>
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
            </div>
            <button type="submit" className='m-auto text-center btn btn-success'>Register</button>
          </form>
    </div>
  )
}

export default Register
