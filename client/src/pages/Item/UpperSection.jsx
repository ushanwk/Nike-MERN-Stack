import {ItemCard} from "./ItemCard.jsx";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Cart, headerLogo, Menu} from "../../assets/images/index.js";

export const UpperSection = ({cartItems, setCartItems}) => {

    const[allItems, setAllItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/item').then(response => {
            response.json().then(items => {
                setAllItems(items);
            })
        });
    }, []);

    return (

        <section>

            <div className='w-full h-40 flex'>
                <div className='w-[350px] h-full flex items-center'>
                    <h1 className='text-[13px] text-gray-400 px-24'>Home > <span
                        className='text-black'>All products</span></h1>
                </div>

                <div className='h-40 flex items-center'>
                    <h1 className='text-[100px] font-bold text-coral-red opacity-30 tracking-[2px]'>Search for
                        Items...</h1>
                </div>

            </div>


            <section
                className={'mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 mx-20'}>

                {
                    allItems.length > 0 && allItems.map((item, index) => (
                        <ItemCard item={item} index={index} cart={cartItems} setCart={setCartItems}/>
                    ))}

            </section>
        </section>
    )
}
