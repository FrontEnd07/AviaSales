import {configureStore} from "@reduxjs/toolkit";
import TicketList from './reducers/TicketList'

export const store = configureStore({
    reducer: {
        TicketList
    },
    devTools: true
})

window.store = store;