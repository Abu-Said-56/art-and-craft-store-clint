import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const click = ()=>{
        logOut()
        .then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Done'
              })
          }).catch((error) => {
            console.error(error)
          });
    }
    const navlinks = <>
       <NavLink to="/home"><li><a className="text-xl">Home</a></li></NavLink>
       <NavLink to="/additems"><li><a className="text-xl">Add Craft Item</a></li></NavLink>
       <NavLink to="/mycraftitems"><li><a className="text-xl">My Art&Craft List</a></li></NavLink>
       <NavLink to="/allitems"><li><a className="text-xl">All Art&Craft Items</a></li></NavLink>
    </>
    return (
        <div className="navbar bg-slate-300 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Art_And_Cratf Store</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">  
                {
                    user ?
                    <button className="btn btn-info text-xl" onClick={click} >Log Out</button>
                    :
                    <div>
                        <NavLink to="/register"><button className="btn btn-ghost text-xl">Register</button></NavLink>                    </div>
                }      
            </div>

        </div>
        
    );
};

export default Navbar;