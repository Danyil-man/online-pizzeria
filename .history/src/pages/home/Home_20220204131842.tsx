import axios from "axios";
import React, { useEffect, useState } from "react";
import Categories from "../../components/categories/Categories";
import Sort from "../../components/sortPopUp/Sort";

const Home = () => {
    const [pizzaItems, setPizzaItems] = useState([])
    useEffect(() => {
        async function FetchData() {
            const response = await axios.get('http://localhost:3000/db.json')
            setPizzaItems(response.data)
        }
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

            </div>
        </div>
    )
}

export default Home;