import React, {useEffect} from 'react';
import style from "./TicketList.module.scss";
import Filter from "./Filter/Filter";
import List from "./List/List";
import SortList from "./SortList/SortList";
import {getSearchApi} from "@http/TicketList/TicketList"
import {useDispatch} from "react-redux";

const TicketList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearchApi())
        return () => {
        }
    }, [dispatch])

    return (
        <div className={style.main}>
            <div className={style.filter}>
                <Filter/>
            </div>
            <div className={style.list}>
                <div className={style.sort}>
                    <SortList/>
                </div>
                <div>
                    <List/>
                </div>
            </div>
        </div>
    );
};

export default TicketList;
