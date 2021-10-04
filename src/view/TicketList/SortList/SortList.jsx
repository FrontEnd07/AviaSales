import React, {useState} from 'react';
import style from './SortList.module.scss';
import {Sort} from "@components/Sort/Sort"
import {useDispatch} from "react-redux"
import {sortAc} from "@store/reducers/TicketList"

const SortList = () => {

    const [activeId, setActiveId] = useState(1)
    const dispatch = useDispatch()

    const data = [
        {
            id: 1,
            selectId: 1,
            title: "Самый дешевый"
        },
        {
            id: 2,
            selectId: 2,
            title: "Самый быстрый"
        },
        {
            id: 3,
            selectId: 3,
            title: "Оптимальный"
        }
    ];

    const handlerClickSort = (id) => {
        switch (id) {
            case 1:
                dispatch(sortAc({key: "price", order: "asc"}))
                break;
            case 2:
                dispatch(sortAc({key: "price", order: "desc"}))
                break;
            case 3:
                dispatch(sortAc(null))
                break;
            default:
                break;
        }
        setActiveId(id)
    }
    return (
        <div className={style.main}>
            <Sort
                data={data}
                activeId={activeId}
                onClick={handlerClickSort}
            />
        </div>
    );
};

export default SortList;
