import React, { FC, useState } from "react";

type CategoriesType = {
    items: Array<string>
    onSelectItem: (index: number) => void
}

const Categories: FC<CategoriesType> = ({ items, onSelectItem }) => {
    const [activeItem, setActiveItem] = useState(null)

    const selectItem = (index: any) => {
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
                    <li onClick={() => selectItem(index)}
                        className={activeItem === index ? 'active' : ''}
                        key={item} >{item}</li>)}
            </ul>
        </div>
    )
}

export default Categories;