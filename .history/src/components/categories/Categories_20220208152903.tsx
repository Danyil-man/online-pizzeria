import React, { FC, useState } from "react";

type CategoriesType = {
    items: Array<string>
}

const Categories: FC<CategoriesType> = ({ items }) => {
    const [activeItem, setActiveItem] = useState(null || Number)

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => setActiveItem(null || 0)}
                >Все</li>
                {items && items.map((item, index) =>
                    <li onClick={() => setActiveItem(index)}
                        className={activeItem === index ? 'active' : ''}
                        key={item} >{item}</li>)}
            </ul>
        </div>
    )
}

export default Categories;