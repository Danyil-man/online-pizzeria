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

    const onSelectItem = (index: any) => {
        setActiveItem(index)
        setSort(false)
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutSide)
    }, [])

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Sorting by:</b>
                <span onClick={showList} >{activeLabel}</span>
            </div>
            {sort && <div className="sort__popup">
                <ul>
                    {
                        items.map((item, index) =>
                            <li key={item.type}
                                onClick={() => onSelectItem(item)}
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