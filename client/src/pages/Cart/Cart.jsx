import {Header} from "./Header.jsx";
import {ItemCard} from "../Item/ItemCard.jsx";

export const Cart = ({cart}) => {
    return (
        <section>
            <Header/>

            <section>

                <div className='w-full h-40 flex border-b-2 border-coral-red border-opacity-30'>
                    <div className='w-[350px] h-full flex items-center'>
                        <h1 className='text-[13px] text-gray-400 px-24'>Home > <span
                            className='text-black'>Cart</span></h1>
                    </div>

                    <div className='h-40 flex items-center'>
                        <h1 className='text-[80px] font-bold text-coral-red opacity-30 tracking-[2px]'>Your Cart Items...</h1>
                    </div>

                </div>

            </section>


            {
                cart.length == 0 ? (
                    <section className={'px-24 flex justify-center items-center mt-36'}>
                        <h1 className='text-[150px] font-bold text-coral-red opacity-10 tracking-[2px]'>No Cart Items</h1>
                    </section>
                ) : (
                    <section className={'px-24'}>
                        <h1 className='text-[150px] font-bold text-coral-red opacity-10 tracking-[2px]'>{cart.length}</h1>
                    </section>
                )
            }
        </section>
    )
}
