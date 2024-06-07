import {headerLogo} from "../../assets/images/index.js";

export function RegHeader() {
    return (
        <>
            <header className="padding-x py-8 z-10 w-full bg-gray-50">
                <nav className="flex justify-center items-center max-container">
                    <a href="/">
                        <img
                            src={headerLogo}
                            alt="Logo"
                            width={180}
                            height={29}
                        />
                    </a>
                </nav>
            </header>
        </>
    )
}