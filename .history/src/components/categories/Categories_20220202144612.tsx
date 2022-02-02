import React, { FC, useState } from "react";

type CategoriesType = {
    items: Array<string>
}

const Categories: FC<CategoriesType> = ({ items }) => {
    const [activeItem, setActiveItem] = useState('')

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === '' ? 'active' : ''}
                    onClick={() => setActiveItem('')}
                >Все</li>
                {items && items.map(item =>
                    <li onClick={() => setActiveItem(item)}
                        className={activeItem === item ? 'active' : ''}
                        key={item} >{item}</li>)}
            </ul>
        </div>
    )
}

export default Categories;