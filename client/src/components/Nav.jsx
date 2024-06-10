import {headerLogo} from "../assets/images/index.js";
import {navLinks} from '../constants/index.js'
import {arrowRight, hamburger} from "../assets/icons/index.js";
import {Link} from "react-router-dom";
import Button from "./Button.jsx";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../UserContext.jsx";
import Profile from '../assets/images/Profile.png'
import logoutIcon from '../assets/images/logout.png'

const Nav = () => {

    const {setUserInfo, userInfo} = useContext(UserContext);

    function logout(){
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        })

        setUserInfo(null);
    }

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(res => {
            res.json().then(info => {
                setUserInfo(info)
            })
        })
    }, []);

    const email = userInfo?.email;

    return(
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29}
                    />
                </a>

                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {
                        navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href}
                                   className="font-montserrat leading-normal text-lg text-slate-gray">{item.label}</a>
                            </li>
                        ))
                    }
                </ul>


                    {
                        email && (
                            <div className='flex flex-wrap gap-4 justify-center'>
                                <img src={Profile} width={45} />
                                <a className={"mt-2"} onClick={logout}><h1 className="font-montserrat leading-normal text-lg text-slate-gray cursor-pointer">Logout</h1></a>
                            </div>
                        )

                    }
                    {!email && (
                        <div className='flex flex-wrap gap-4 justify-center'>
                            <Link to={'/register'}><Button label='Register' iconUrl={arrowRight}/></Link>
                        </div>
                    )}


                        <div className="lg:hidden">
                        <img src={hamburger} width={25} height={25}/>
                </div>
            </nav>
        </header>
    )
}

export default Nav;