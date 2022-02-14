import React, { FC, useEffect, useRef, useState } from "react";

type Categories = {
    name: string,
    type: string
}

type SortType = {
    items: Array<Categories>
    activeSort: string
    setActiveItem: (type: string) => void
}

const Sort: FC<SortType> = ({ items, activeSort, setActiveItem }) => {
    const [sort, setSort] = useState(false)
    const sortRef = useRef<any>()
    const activeLabel = items.find(obj => obj.type === activeSort)?.name

    const showList = () => {
        setSort(!sort)
    }

    const handleOutSide = (e: any) => {
        if (!e.path.includes(sortRef.current)) {
            setSort(false)
        }
    }

    const onSelectItem = (type: any) => {
        setActiveItem(type)
        setSort(false)
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutSide)
    }, [])

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <b>Sorting by:</b>
                <span onClick={showList} >{activeLabel}</span>
            </div>
            {sort && <div className="sort__popup">
                <ul>
                    {
                        items.map((item, index) =>
                            <li key={item.type}
                                onClick={() => onSelectItem(item.type)}
                                className={activeSort === item.type ? 'active' : ''}
                            >
                                {item.name}
                            </li>)
                    }
                </ul>
            </div>
            }

        </div>
    )
}
export default Sort