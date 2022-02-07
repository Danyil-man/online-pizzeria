import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import Categories from "../../components/categories/Categories";
import PizzaItem from "../../components/pizzaItem/PizzaItem";
import Sort from "../../components/sortPopUp/Sort";
import { getAllPizzas, PizzaType } from "../../store/reducers/pizzas";
import { AppStateType } from "../../store/reduxStore";

type HomeType = {
    pizzas: Array<PizzaType>
    getAllPizzas: () => void
}

const Home: FC<HomeType> = ({ pizzas }) => {
    const [pizzaItems, setPizzaItems] = useState<Array<PizzaType>>([])

    useEffect(() => {
        console.log('mounted')
        getAllPizzas()

    }, [])
    console.log(pizzas)
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
                <Sort items={[
                    { name: 'popular', type: 'popular' },
                    { name: 'price', type: 'price' },
                    { name: 'alphabet', type: 'alphabet' }
                ]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzaItems.map(pizza => <PizzaItem key={pizza.id} pizza={pizza} />)}
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    pizzas: state.pizzas.items
})

export default connect(mapStateToProps, {
    getAllPizzas
})(Home);