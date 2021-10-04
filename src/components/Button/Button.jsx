import React from 'react';
import style from "./Button.module.scss";

export const Button = ({children, appClassName, ...props}) => <button
    className={`${style.button} ${appClassName ? appClassName : ""}`}
    {...props}
>
    {props.disabled ? <span>Loading...</span> : children}
</button>
