import React, { FC, useState } from "react";
import { PizzaCartType } from "../../store/reducers/cart";
import { PizzaType } from "../../store/reducers/pizzas";
import Button from "../button/Button";


type PizzaItemType = {
    pizza: PizzaType
    cartCount: number
    onAddPizza: (obj: PizzaCartType) => void
}
const PizzaItem: FC<PizzaItemType> = ({ pizza, cartCount, onAddPizza }) => {
    const [activeType, setActiveType] = useState(pizza.types[0])
    const [activeSize, setActiveSize] = useState(0)

    const avaiableType = ['thin', 'traditional']
    const avaliableSizes = [26, 30, 40]


    const onSelectType = (index: number) => {
        setActiveType(index)
    }
    const onSelectSize = (index: number) => {
        setActiveSize(index)
    }
    const addPiza = () => {
        const obj = {
            id: pizza.id,
            name: pizza.name,
            imageUrl: pizza.imageUrl,
            price: pizza.price,
            size: avaliableSizes[activeSize],
            type: avaiableType[activeType]
        }
        onAddPizza(obj)
    }

    return (

        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={pizza.imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{pizza.name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {avaiableType.map((type, index) => <li
                        key={type}
                        onClick={() => onSelectType(index)}
                        className={`${activeType === index ? 'active' : ''}
                        ${!pizza.types.includes(index) && 'disabled'}`} >{type}</li>)}
                </ul>
                <ul>
                    {avaliableSizes.map((size, index) =>
                        <li key={size}
                            onClick={() => onSelectSize(index)}
                            className={`${activeSize === index ? 'active' : ''}
                            ${!pizza.sizes.includes(size) && 'disabled'}`}
                        >{size} cm.</li>)}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {pizza.price} ₽</div>
                <button onClick={addPiza} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Add</span>
                    {cartCount && <i>{cartCount}</i>}
                </button>
            </div>
        </div>
    )
}

export default PizzaItem