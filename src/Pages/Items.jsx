import Navbar from "../components/Navbar.jsx";
import './pages-css/items.css'
import {useState} from "react";
export function Items() {

    const [items, setItems] = useState( [
        {
            id: 1,
            imageUrl: '/',
            name: 'GOSURF50',
            quantity: 0,
            description: 'Enjoy 1GB of data for 3 days for only 50 pesos',
            price: 50
        },
        {
            id: 2,
            imageUrl: '/',
            name: 'GOSURF99',
            quantity: 0,
            description: 'Enjoy 2GB of data for 7 days for only 99 pesos',
            price: 99
        },
        {
            id: 3,
            imageUrl: '/',
            name: 'GOSURF299',
            quantity: 0,
            description: 'Enjoy 10GB of data for 30 days for only 299 pesos',
            price: 299
        },
        {
            id: 4,
            imageUrl: '/',
            name: 'GOSAKTO120',
            quantity: 0,
            description: 'Enjoy 3GB of data for 7 days for only 120 pesos',
            price: 120
        },
        {
            id: 4,
            imageUrl: '/',
            name: 'ML10',
            quantity: 0,
            description: 'Mobile Legends 1 day access for only 10 pesos',
            price: 10
        },
    ]);


    const increaseQuantity = (index) => {
        const newItems = [...items];
        newItems[index].quantity += 1;
        setItems(newItems);
    };


    const decreaseQuantity = (index) => {
        const newItems = [...items];
        if (newItems[index].quantity > 0) {
            newItems[index].quantity -= 1;
        }
        setItems(newItems);
    };


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
            {getItems()}
            <div className="next-container">
                <button id="next" ><p>Next</p></button>
            </div>
        </div>
        </>
    )
}


