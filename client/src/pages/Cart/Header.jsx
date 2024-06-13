import {Link} from "react-router-dom";
import {Cart, headerLogo, Menu} from "../../assets/images/index.js";


export const Header = () => {

    return (
        <header className='w-full h-20 flex justify-between'>
            <Link to='/' className='flex gap-10 items-center'>
                <div className='w-20 h-full bg-coral-red flex items-center justify-center'>
                    <img src={Menu} className='w-8'/>
                </div>

                <a>
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={150}
                        height={29}
                    />
                </a>
            </Link>

            <Link>
                <div className='w-32 h-full bg-coral-red flex gap-3 items-center justify-center cursor-pointer'>
                    <img src={Cart} className='w-6 h-6'/>

                    <h1 className='text-white text-[12px]'><span
                        className='font-bold text-[18px]'>0</span> in Bag</h1>
                </div>
            </Link>
        </header>
    )
}
