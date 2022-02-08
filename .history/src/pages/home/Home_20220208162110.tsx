import React, { FC, useCallback, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Categories from "../../components/categories/Categories";
import PizzaItem from "../../components/pizzaItem/PizzaItem";
import Sort from "../../components/sortPopUp/Sort";
import { setItemCategory } from "../../store/reducers/filter";
import { getAllPizzas, PizzaType } from "../../store/reducers/pizzas";
import { AppStateType } from "../../store/reduxStore";

type HomeType = {
    pizzas: Array<PizzaType>
}

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Home: FC<HomeType> = () => {
    const dispatch = useDispatch()
    const { pizzas } = useSelector((state: AppStateType) => {
        return {
            pizzas: state.pizzas.items
        }
    })

    const onSelectCategory = useCallback((index: number) => {
        dispatch(setItemCategory(index))
    }, [])

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categoryNames}
                    onSelectItem={onSelectCategory}
                />
                <Sort items={[
                    { name: 'popular', type: 'popular' },
                    { name: 'price', type: 'price' },
                    { name: 'alphabet', type: 'alphabet' }
                ]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas.map(pizza => <PizzaItem key={pizza.id} pizza={pizza} />)}
            </div>
        </div>
    )
}

// const mapStateToProps = (state: AppStateType) => ({
//     pizzas: state.pizzas.items,
//     filters: state.filter
// })

export default Home;