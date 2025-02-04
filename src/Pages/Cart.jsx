import Navbar from "../components/Navbar.jsx";
import {useState, useEffect} from "react";
import './pages-css/cart.css'
import Popup from 'reactjs-popup';



export function Cart() {
    const [cartItems, setCartItems] = useState([]);

    function getTotal() {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    }

    function removeCartItem(itemId) {
        const updatedItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedItems);
        localStorage.setItem("items", JSON.stringify(updatedItems));
    }

    function removeAllCartItems() {
        console.log("Removing all cart items...");
        setCartItems([]);
        localStorage.removeItem("items");
    }


    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem("items")) || [];
        setCartItems(savedItems);
    }, []);

    function renderCartItems() {
        if (cartItems.length === 0) {
            return  <>
                <div id="empty-message">
                    <p>Your cart is empty!</p>
                </div>
            </>;
        }
    }

    function displayTotal(){
        if(cartItems.length > 0){
            return <>
                <div id="line"></div>
                <div className="cart-total">
                    <Popup trigger={
                        <button id="chk-btn"> PHP {getTotal().toFixed(2)} </button>} position="top center" modal>
                        {(close) => (
                            <div className="popup-container">
                                <div id="content-container">
                                    <div className="x-container">
                                        <div id="X-btn" onClick={close}><p>x</p></div>
                                    </div>
                                    <div className="popup-panel">
                                        <h2>Confirm Payment</h2>




                                        {cartItems.map(item => (
                                            <div className="cart-item" key={item.id}>
                                                <div className="cart-item-info">
                                                    <div id="cart-item-name">{item.name} &nbsp;</div>
                                                    <div id="price-quantity">
                                                        <div id="cart-item-price">PHP {item.price}</div>
                                                        <div id="cart-item-quantity">x {item.quantity}</div>
                                                    </div>
                                                </div>

                                            </div>
                                        ))}
                                        <div id="line"></div>
                                        <div id="message-box">

                                        </div>
                                        <div id="pay-center">
                                        <button id="chk-btn" onClick={() => removeAllCartItems()}>Pay PHP {getTotal().toFixed(2)}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
            </>
        }
    }

    function displayInfo() {
        if (cartItems.length > 0) {
            return <div className="user-info">
                <div className="cart-sub-header">
                    <h2>Contact Info</h2>
                </div>
                <div className="cart-sub-body">
                    <form>
                        <label>
                            <div className="c-info">
                                Full Name: <input type="text" name="name" placeholder="e.g. Joaquin 🕊️" id="user-fname" />
                                Mobile Number: <input type="text" name="name" placeholder="e.g. 09927073036" id="user-mobile-num" />
                            </div>
                        </label>
                    </form>
                </div>

                <div className="cart-sub-header">
                    <h2>Payment Method</h2>
                </div>

                <div className="cart-sub-body">
                    <form>
                        <label>
                            <div id="radio-btn">
                                <div className="r-btn"><input type="radio" name="name" value="Gcash"/>&nbsp;Gcash</div>
                                <div className="r-btn"><input type="radio" name="name" value="Maya"/>&nbsp;Maya</div>
                                <div className="r-btn"><input type="radio" name="name" value="COD"/>&nbsp;Cash on Delivery</div>
                            </div>
                        </label>
                    </form>
                </div>

                <div className="cart-sub-header">
                    <h2>Address</h2>
                </div>

                <div className="cart-sub-body">
                    <form>
                        <label>
                            <div id="radio-btn">
                                <div className="address-section">
                                    Address: <input type="" name="name" id="address-txt"/></div>
                            </div>
                        </label>
                    </form>
                </div>

                <div className="cart-sub-header">
                    <h2>Your Orders: </h2>
                </div>
            </div>
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

                    {displayInfo()}
                    {renderCartItems()}
                    {cartItems.map(item => (
                        <div className="cart-item" key={item.id}>
                            <div className="cart-item-info">
                                <div id="cart-item-name">{item.name} &nbsp;</div>
                                <div id="price-quantity">
                                    <div id="cart-item-price">PHP {item.price}</div>
                                    <div id="cart-item-quantity">x {item.quantity}</div>
                                    <button id="cart-x-btn" onClick={() => removeCartItem(item.id)}>x</button>
                                </div>
                            </div>

                        </div>
                    ))}
                    {displayTotal()}
                </div>
            </div>
        </>

    )
}