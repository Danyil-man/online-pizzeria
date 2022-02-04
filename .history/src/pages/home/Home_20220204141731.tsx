import axios from "axios";
import React, { useEffect, useState } from "react";
import Categories from "../../components/categories/Categories";
import PizzaItem from "../../components/pizzaItem/PizzaItem";
import Sort from "../../components/sortPopUp/Sort";

const Home = () => {
    const [pizzaItems, setPizzaItems] = useState([])
    useEffect(() => {
        async function FetchData() {
            const response = await axios.get('http://localhost:3000/db.json')
            setPizzaItems([response.data])
        }
        console.log(pizzaItems.map(item => item))
        FetchData()
    }, [])
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
                <Sort items={['популярности', 'цене', 'алфавиту']} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {/* {pizzaItems.map(pizza => <PizzaItem key={pizza.id} pizza={pizza} />)} */}
            </div>
        </div>
    )
}

export type PizzaType = {
    id: number,
    imageUrl: string,
    name: string,
    types: Array<number>,
    sizes: Array<number>,
    price: number,
    category: number,
    rating: number

}
export default Home;