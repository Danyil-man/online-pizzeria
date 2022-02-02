import React, { FC, useState } from "react";

type CategoriesType = {
    items: Array<string>
}

const Categories: FC<CategoriesType> = ({ items }) => {
    const [activeItem, setActiveItem] = useState(null)

    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {items.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}

export default Categories;