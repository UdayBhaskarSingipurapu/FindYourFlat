import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
        <div>
            <ul className="nav bg-secondary justify-content-end fs-2">
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
