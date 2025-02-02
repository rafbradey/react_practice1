import Navbar from "../components/Navbar.jsx";
import './pages-css/items.css'
import {Link} from "react-router-dom";
import {GetItemList} from "../components/GetItemList.jsx";
import  {useEffect} from "react";

export function Items() {

    const[items, setItems] = GetItemList();


    const increaseQuantity = (index) => {
        const newItems = [...items];
        newItems[index].quantity += 1;
        setItems(newItems);
    };


// Load quantities from localStorage on mount
    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("items")) || [];
        if (storedItems.length > 0) {
            const updatedItems = items.map(item => {
                const storedItem = storedItems.find(stored => stored.id === item.id);
                return storedItem ? { ...item, quantity: storedItem.quantity } : item;
            });
            setItems(updatedItems);
        }
    }, []); // Empty dependency array ensures this runs only on mount


    // Save items with quantity > 0 to localStorage
    useEffect(() => {
        const itemsInCart = items.filter(item => item.quantity > 0);
        if (itemsInCart.length > 0) {
            localStorage.setItem("items", JSON.stringify(itemsInCart));
        }
        else {
            localStorage.removeItem("items");
        }
    }, [items]);




    const decreaseQuantity = (index) => {
        const newItems = [...items];
        if (newItems[index].quantity > 0) {
            newItems[index].quantity -= 1;
        }
        setItems(newItems);
    };

    /*
    function check(){
        const initialItems = JSON.parse(localStorage.getItem("items")) || [];
        console.log(initialItems)
    } */ //for debugging purposes


    function getItems(){
        return items.map((item, index) => {
            return (
                <>
                    <div className="items">
                        <div key={item.id} >
                            <div className="items-inner-container">
                            <div className="item-price">{item.price} <p>php</p></div>

                                <div className="info-button-separator">
                                <div className="item-info">
                                <div id="item-name">{item.name}</div>
                                <div id="item-description"><span>{item.description}</span></div>
                                </div>

                                <div className="item-quantity">
                                <button id="minus" onClick={() => decreaseQuantity(index)}>-</button>
                                <div id="number" ><span>{item.quantity}</span></div>
                                <button id="add" onClick={
                                    () => increaseQuantity(index)
                                }>+</button>
                                </div>

                                    </div>
                                </div>
                        </div>

                    </div>

                </>
            )
        })

    }


    return (
        <>
            <Navbar/>

        <div className="items-container">
            <div className="outer-container">

            { getItems() }
            <div className="next-container">
                <button id="next" >
                    <Link to="/cart" id="cartLink"> <p>Next</p> </Link>

                </button>

            </div>

        </div>

        </div>

        </>
    )
}



