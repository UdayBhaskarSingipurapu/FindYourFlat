import { Link } from "react-router-dom"
import './Header.css'
import { IoBook } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
function Header() {
  return (
    <div>
        <div className="bgc text-white d-flex justify-content-between px-5 py-3">
            <h1 className="mt-2">Find Your Flat</h1>
            <ul className="nav fs-2">
                <li><Link className="nav-link text-white hov" to={'register'}><IoBook className="clr mx-2" />Register</Link></li>
                <li><Link className="nav-link text-white hov" to={'login'}><IoLogIn className="clr mx-2" />Login</Link></li>
                <li><Link className="nav-link text-white hov" to={'login'}><IoLogOut className="clr mx-2" />Logout</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header
