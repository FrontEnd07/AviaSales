import React, {useEffect, useState} from 'react';
import style from './List.module.scss';
import {useSelector} from "react-redux";
import {compareValues} from "@utils/SortObject"
import {Button} from "@components/Button/Button"

var moment = require('moment'); // require

const List = () => {

    let {list, sort, filter} = useSelector(state => state.TicketList)
    const [listTickets, setListTickets] = useState([])
    const [page, setPage] = useState(5)

    useEffect(() => {
        if (sort) {
            setListTickets(list?.tickets?.slice(0, page).sort(compareValues(sort.key, sort.order)))
        } else {
            setListTickets(list?.tickets?.slice(0, page))
        }
    }, [sort, list])

    let rublesRU = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
    });

    useEffect(() => {
        if (filter.length > 0) {
            let arr = [];
            list?.tickets?.filter((el) => {
                return el.segments.filter(stops => {
                    return filter.forEach(val => {
                        if (val !== 5 && stops.stops.length === val) {
                            arr.push(el)
                        }
                    })
                })
            })
            arr.length > 0 && setListTickets(arr)
        }
        if (filter.length === 0 && list?.tickets?.length) {
            list && setListTickets(list.tickets)
        }
    }, [filter, list])
    return (
        <div className={style.main}>
            {list ?
                <>
                    {listTickets?.slice(0, page).map((el, index) => (
                        <div key={index} className={style.list}>
                            <div>
                                <div className={style.price}>
                                    <span>{rublesRU.format(el.price)}</span>
                                </div>
                                <div>
                                    <img src={`https://pics.avs.io/99/36/${el.carrier}.png`} alt=""/>
                                </div>
                            </div>
                            <div>
                                {el.segments.map((val, key) => (
                                    <div key={key}>
                                        <div>
                                            <div>
                                                <span>{val.origin} – {val.destination}</span>
                                                <span>10:45 – 08:00</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <span>В пути</span>
                                                <span>{moment.duration(val.duration, 'minutes').hours()}ч {moment.duration(val.duration, 'minutes').minutes()}м</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <span>{val.stops.length} пересадки</span>
                                                <span>{val.stops.length > 0 ? val.stops.map((stops, ind) => (
                                                    <span key={ind}>{stops}, </span>
                                                )) : <span
                                                    style={{fontSize: "12px", fontFamily: "'Open Sans', sans-serif"}}>без пересадки</span>}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <Button onClick={() => {
                        setPage(page + 5)
                    }}>
                        Показать еще 5 билетов!
                    </Button>
                </>
                : <div>Loading...</div>}
        </div>
    );
};

export default List;
