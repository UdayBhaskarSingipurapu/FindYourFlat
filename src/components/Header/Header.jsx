import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
        <div className=" bg-secondary text-white d-flex justify-content-between px-5 py-3">
            <h1 className="mt-2">Find Your Flat</h1>
            <ul className="nav fs-2">
                <li>
                    <Link className="nav-link text-white" to={'register'}>Register</Link>
                </li>
                <li>
                    <Link className="nav-link text-white" to={'login'}>Login</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header
