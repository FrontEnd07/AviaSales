import React from 'react';
import style from "./Sort.module.scss";

export const Sort = ({onClick, data, appClassName, activeId}) => {
    return (
        <div className={style.main}>
            <div>
            {data.map(el => (
                <button
                    key={el.id}
                    onClick={() => onClick(el.selectId)}
                    className={`${appClassName ? appClassName : ""} ${el.selectId === activeId ? style.active : ""}`}
                >
                    {el.title}
                </button>
            ))}
            </div>
        </div>
    );
};
