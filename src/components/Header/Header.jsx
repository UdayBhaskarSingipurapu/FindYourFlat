import { Link } from "react-router-dom"
import './Header.css'
import { IoBook } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { UserLoginContext } from "../../contexts/userLoginContext/userLoginContext"
import { useContext, useEffect, useState } from "react";
function Header() {
  let {logoutUser,status}=useContext(UserLoginContext)
  let [visible,setVisible]=useState(false)
  function toggleVisible(){
    setVisible(!visible)
  }
  return (
    <div>
        <div className="bgc text-white d-flex justify-content-between px-5 py-3">
            <h1 className="mt-2">Find Your Flat</h1>
            {(visible===false)&&(<ul className="fs-2 head">
                <li><Link className="nav-link text-white hov" to={'register'}><IoBook className="clr mx-2" />Register</Link></li>
                {
                  (status===false)?
                  (<li><Link className="nav-link text-white hov" to={'login'}><IoLogIn className="clr mx-2" />Login</Link></li>):
                  (<li><Link className="nav-link text-white hov" to={'login'} onClick={logoutUser}><IoLogOut className="clr mx-2" />Logout</Link></li>)
                }
            </ul>)}
            <li className="fs-1 icon" onClick={toggleVisible}>☰</li>
        </div>
        {
          (visible===true)&&(<ul className="side fs-2">
                <li className="fs-1 icon text-white" onClick={toggleVisible}>✕</li>
                <li><Link className="nav-link text-white hov" to={'register'} onClick={toggleVisible}><IoBook className="clr mx-2" />Register</Link></li>
                {
                  (status===false)?
                  (<li><Link className="nav-link text-white hov" to={'login'} onClick={toggleVisible}><IoLogIn className="clr mx-2" />Login</Link></li>):
                  (<li><Link className="nav-link text-white hov" to={'login'} onClick={()=>{toggleVisible,logoutUser}}><IoLogOut className="clr mx-2" />Logout</Link></li>)
                }
          </ul>)
        }
    </div>
  )
}

export default Header
