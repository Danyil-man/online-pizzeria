import React, { FC, useState } from "react";

type CategoriesType = {
    items: Array<string>
}

const Categories: FC<CategoriesType> = ({ items }) => {
    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = (index: any) => {
        setActiveItem(index)
        onSelectItem(index)
    }
    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => setActiveItem(null)}
                >Все</li>
                {items && items.map((item, index) =>
                    <li onClick={() => onSelectItem(index)}
                        className={activeItem === index ? 'active' : ''}
                        key={item} >{item}</li>)}
            </ul>
        </div>
    )
}

export default Categories;