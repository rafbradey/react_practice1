import Navbar from "../components/Navbar.jsx";
import {useState, useEffect} from "react";
import './pages-css/cart.css'
export function Cart() {

    const [cartItems, setCartItems] = useState([]);
    //const getTotal = cartItems.reduce((total, item) => total + item.price, 0);
    //total using useState


    function getTotal() {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    }



    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem("items")) || [];
        setCartItems(savedItems);



    }, []);

    function renderCartItems() {
        if (cartItems.length === 0) {
            return <p>Your cart is empty!</p>;
        }

    }



    return (
        <>
            <Navbar/>
            <div>

                <div className="cart-container">
                    <div className="cart-header">
                        <h1>Your Cart</h1>
                    </div>
                    {renderCartItems()}

                    {cartItems.map(item => (

                    <div className="cart-item" key={item.id}>
                        <div className="cart-item-info">
                            <div id="cart-item-name">{item.name} &nbsp;</div>
                            <div id="cart-item-price">{item.price} php &nbsp;</div>
                            <div id="cart-item-quantity">x {item.quantity}</div>

                        </div>
                    </div>
                    ))
                    }
                    <div className="cart-total"><p>Total: {getTotal()} </p></div>
                </div>


            </div>



            </>
    )
}





