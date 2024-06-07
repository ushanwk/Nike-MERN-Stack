import {headerLogo} from "../assets/images/index.js";
import {navLinks} from "../constants/index.js";
import {Link} from "react-router-dom";
import {hamburger} from "../assets/icons/index.js";

export function NavItemsSec() {
    return (
        <header className="padding-x py-8 z-10 w-full flex justify-center">
            <nav className="flex items-center max-container">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={200}
                        height={40}
                    />
                </a>

                <div className="lg:hidden">
                    <img src={hamburger} width={25} height={25}/>
                </div>
            </nav>
        </header>
)
}