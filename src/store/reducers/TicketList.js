import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    list: null,
    sort: {key: "price", order: "asc"},
    filter: []
}

const TicketList = createSlice({
    name: 'TicketList',
    initialState,
    reducers: {
        listAc(state, action) {
            state.list = action.payload
        },
        sortAc(state, action) {
            state.sort = action.payload
        },
        filterAc(state, action) {
            state.filter = action.payload
        }
    }
})

export const {
    listAc,
    sortAc,
    filterAc
} = TicketList.actions
export default TicketList.reducer