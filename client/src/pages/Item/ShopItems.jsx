import {UpperSection} from "./UpperSection.jsx";
import {useState} from "react";
import {Cart} from "../Cart/Cart.jsx";
import {Header} from "./Header.jsx";

export function ShopItems() {

    const[window, setWindow] = useState(0);
    const[cartItems, setCartItems] = useState([]);

    if(window == 0){
        return (
            <section>
                <Header cartItems={cartItems} setCartItems={setCartItems} setWindow={setWindow} />
                <UpperSection cartItems={cartItems} setCartItems={setCartItems} />
            </section>
        )
    }

    if(window == 1){
        return (
            <section>
                <Cart cart={cartItems} />
            </section>
        )
    }
}