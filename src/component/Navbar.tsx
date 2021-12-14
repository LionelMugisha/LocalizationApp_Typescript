import React, { FC, useContext } from 'react'
import Menu from "./image/bars-solid.svg"
import Close from "./image/times-solid.svg"
import { Link, useNavigate } from "react-router-dom"
import './css/Header.css'
import { AuthContext } from './context/AuthContext'
import Swal from "sweetalert2"

const Navbar: FC = () => {
    const { logout, currentUser } = useContext(AuthContext);
	const navigate = useNavigate();

    const handleLogOut = async () => {
		try {
			await logout();
			navigate("/");
		} catch {
			Swal.fire({
				title: "Failed To Log Out",
				text: ``,
				icon: "error",
				confirmButtonText: "OK",
			});
		}
	};
    return(
<>
            <header>
                <div className="menu">
                    <img src={Menu} alt="" width="20" />
                </div>
                <div className="logo text-gray-800 sm:text-sm lg:text-2xl md:text-xl font-bold">
                    <h1><Link to="/">Get Your Location</Link></h1>
                </div>
                {!currentUser && 
                    <>
                        <nav>
                            <ul className="toggle">
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li className="close">
                                    <img src={Close} alt="" width="20" />
                                </li>
                            </ul>
                        </nav>
                    </>
                }
                {currentUser && 
                    <>
                        <nav>
                            <ul className="toggle">
                                <li><Link to="/dashboard">Dashboard</Link></li>
                                <li className="close">
                                    <img src={Close} alt="" width="20" />
                                </li>
                            </ul>
                            <div className="nav-cart" onClick={handleLogOut}>
                                LOGOUT
                            </div>
                        </nav>
                    </>
                }
            </header>
        </>
    )
}

export default Navbar;