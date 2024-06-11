import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../UserContext.jsx";
import {headerLogo} from "../../assets/images/index.js";
import {navLinks} from "../../constants/index.js";
import Profile from "../../assets/images/Profile.png";
import {Link, Navigate} from "react-router-dom";
import Button from "../../components/Button.jsx";
import {arrowRight, hamburger} from "../../assets/icons/index.js";

export function AdminNav() {
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


    return(
        <header className="py-8 z-10 w-full bg-white">
            <nav className="flex justify-between items-center max-container">

                <h2 className="text-[40px] font-palanquin font-bold">Welcome <span
                    className="text-coral-red">Ushan Kaushalya</span></h2>


                <div className='flex flex-wrap gap-4 justify-center'>
                    <a href={'/'} className={"mt-2"} onClick={logout}><h1 className="font-montserrat leading-normal text-lg text-slate-gray cursor-pointer">Logout</h1></a>
                </div>


                <div className="lg:hidden">
                    <img src={hamburger} width={25} height={25}/>
                </div>
            </nav>
        </header>
    )
}