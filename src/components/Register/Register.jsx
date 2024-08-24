function Register() {
  return (
    <div>
      <form action="" className="card border-3 w-50 mx-auto my-5 text-center py-4">
        <h2>Register</h2>
        <div className="my-3">
          <label htmlFor="username" className="my-3 mx-2">Username</label>
          <input type="text" name="username" className="w-50  m-auto" id="username" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="my-3 mx-4">Email</label>
          <input type="email" name="email" id="email" className="w-50 m-auto"/>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="my-3 mx-2">Password</label>
          <input type="password" name="password" id="password" className="w-50 m-auto"/>
        </div>

        <button type="submit" className="btn btn-success w-25 mx-auto">Submit</button>
      </form>
    </div>
  )
}

export default Register
