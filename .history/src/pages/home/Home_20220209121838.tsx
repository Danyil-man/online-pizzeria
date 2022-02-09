import React, { FC, useCallback, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Categories from "../../components/categories/Categories";
import PizzaItem from "../../components/pizzaItem";
import PizzaLoader from "../../components/pizzaItem/PizzaLoader";
import Sort from "../../components/sortPopUp/Sort";
import { setItemCategory } from "../../store/reducers/filter";
import { getAllPizzas, PizzaType } from "../../store/reducers/pizzas";
import { AppStateType } from "../../store/reduxStore";

type HomeType = {
    pizzas: Array<PizzaType>
}

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    { name: 'popular', type: 'popular' },
    { name: 'price', type: 'price' },
    { name: 'alphabet', type: 'alphabet' }
]

const Home: FC<HomeType> = () => {
    const dispatch = useDispatch()
    const pizzas = useSelector((state: AppStateType) => state.pizzas.items)
    const isLoaded = useSelector((state: AppStateType) => state.pizzas.isLoaded)
    const { category, sortBy } = useSelector((state: AppStateType) => state.filter)

    const onSelectCategory = (index: number) => {
        dispatch(setItemCategory(index))
    }

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories
                        items={categoryNames}
                        onSelectItem={onSelectCategory}
                    />
                    <Sort items={sortItems} />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoaded ?
                        pizzas.map(pizza => <PizzaItem key={pizza.id} pizza={pizza} />)
                        :
                        Array(12).fill(<PizzaLoader />)
                    }
                </div>
            </div>
        </>
    )
}

// const mapStateToProps = (state: AppStateType) => ({
//     pizzas: state.pizzas.items,
//     filters: state.filter
// })

export default Home;