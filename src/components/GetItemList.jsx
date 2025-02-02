import { useState } from "react";

export function GetItemList() {

        const [items, setItems] = useState([
            {
                id: 1,
                imageUrl: "/",
                name: "GOSURF50",
                quantity: 0,
                description: "Enjoy 1GB of data for 3 days for only 50 pesos",
                price: 50,
            },
            {
                id: 2,
                imageUrl: "/",
                name: "GOSURF99",
                quantity: 0,
                description: "Enjoy 2GB of data for 7 days for only 99 pesos",
                price: 99,
            },
            {
                id: 3,
                imageUrl: "/",
                name: "GOSURF299",
                quantity: 0,
                description: "Enjoy 10GB of data for 30 days for only 299 pesos",
                price: 299,
            },
            {
                id: 4,
                imageUrl: "/",
                name: "GOSAKTO120",
                quantity: 0,
                description: "Enjoy 3GB of data for 7 days for only 120 pesos",
                price: 120,
            },
            {
                id: 5,
                imageUrl: "/",
                name: "ML10",
                quantity: 0,
                description: "Mobile Legends 1 day access for only 10 pesos",
                price: 10,
            },
        ]);

        return [items, setItems];

}

