import React, { FC, useState } from "react";

type CategoriesType = {
    items: Array<string>
    activeCategory: null | number
    onSelectItem: (index: number) => void
}

const Categories: FC<CategoriesType> = ({ items, activeCategory, onSelectItem }) => {

    const selectItem = (index: any) => {
        onSelectItem(index)
    }
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => selectItem(null)}
                >Все</li>
                {items && items.map((item, index) =>
                    <li onClick={() => selectItem(index)}
                        className={activeCategory === index ? 'active' : ''}
                        key={item} >{item}</li>)}
            </ul>
        </div>
    )
}

export default Categories;