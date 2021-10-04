import React, {useEffect, useState} from 'react';
import style from './Filter.module.scss';
import {filterAc} from "@store/reducers/TicketList"
import {useDispatch} from "react-redux"

const Filter = () => {
    const [checkbox, setChekbox] = useState([])
    const dispatch = useDispatch()
    const checkList = [
        {
            id: 1,
            name: "all",
            title: "Все",
            select: 5
        },
        {
            id: 2,
            name: "NotTransfers",
            title: "Без пересадок",
            select: 0
        },
        {
            id: 3,
            name: "OneTransfers",
            title: "1 пересадка",
            select: 1
        },
        {
            id: 4,
            name: "TwoTransfers",
            title: "2 пересадка",
            select: 2
        },
        {
            id: 5,
            name: "ThreeTransfers",
            title: "3 пересадка",
            select: 3
        }
    ]

    useEffect(() => {
        dispatch(filterAc(checkbox))
        return () => {

        }
    }, [checkbox, dispatch])

    const hendlerCheckbox = (name, id, event) => {
        const {
            checked,
            value
        } = event.target;

        setChekbox(
            prev => checked
                ? [...prev, parseInt(value)]
                : prev.filter(val => val !== parseInt(value))
        );
    }
    return (
        <div className={style.main}>
            <div className={style.title}>
                <h1>Количество пересадок</h1>
            </div>
            <div className={style.CheckboxList}>
                {checkList.map(el => (
                    <label onClick={(event) => hendlerCheckbox(el.name, el.id, event)} key={el.id} htmlFor={el.name}>
                        <input type="checkbox" value={el.select} id={el.name}/>
                        <span>{el.title}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Filter;
