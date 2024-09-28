import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import './NavBar.css'

const Navbar = () => {

    const NavOptions = <>
        <li><NavLink to='/'>HOME</NavLink></li>
        <li><a>CONTACT US</a></li>
        <li><a>DASHBOARD</a></li>
        <li><NavLink to='/menu'>OUR MENU</NavLink></li>
    </>

    return (
        <div className="navbar font-Inter fixed z-10 bg-[#000] bg-opacity-45 text-[#FFF]">
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
                        {NavOptions}
                    </ul>
                </div>
                <div className='flex  items-center gap-2 uppercase font-semibold'>
                    <img className='w-16' src={logo} alt="" />
                    <div className='flex flex-col font-Cinzel'>
                        <a className="text-base md:text-2xl font-semibold ">Bistro Boss</a>
                        <span className='text-sm md:text-xl md:font-light tracking-widest '>restaurant</span>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul id="sidebar" className="flex gap-6 text-sm">
                    {NavOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-active btn-neutral">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;