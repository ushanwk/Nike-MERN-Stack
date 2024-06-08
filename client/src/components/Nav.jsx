import {headerLogo} from "../assets/images/index.js";
import {navLinks} from '../constants/index.js'
import {arrowRight, hamburger} from "../assets/icons/index.js";
import {ShopItems} from "../pages/Item/ShopItems.jsx";
import {Link} from "react-router-dom";
import Button from "./Button.jsx";

const Nav = () => {
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

                <div className='flex flex-wrap gap-4 justify-center'>
                    <Link to={'/register'}><Button label='Register' iconUrl={arrowRight}/></Link>
                </div>

                <div className="lg:hidden">
                    <img src={hamburger} width={25} height={25}/>
                </div>
            </nav>
        </header>
    )
}

export default Nav;