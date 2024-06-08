import {headerLogo} from "../assets/images/index.js";
import {navLinks} from '../constants/index.js'
import {arrowRight, hamburger} from "../assets/icons/index.js";
import {ShopItems} from "../pages/Item/ShopItems.jsx";
import {Link} from "react-router-dom";
import Button from "./Button.jsx";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../UserContext.jsx";

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
                                <h1>{email}</h1>
                                <a onClick={logout}>Logout</a>
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