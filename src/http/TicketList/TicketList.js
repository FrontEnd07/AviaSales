import {$host} from "../index";
import {listAc} from "@store/reducers/TicketList"
import {toast} from 'react-toastify';

export const getTicketsApi = (id) =>
    async (dispatch) => {
        try {
            const {data} = await $host.get(`tickets?searchId=${id}`).catch((e) => {
                if (e.response) {
                    toast.error(e.response.data, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
            dispatch(listAc(data))
        } catch (e) {
            console.log(e.massage);
        }
    }

export const getSearchApi = () => async (dispatch) => {
    try {
        const {data} = await $host.get(`search`)
        dispatch(getTicketsApi(data.searchId))
    } catch (e) {
        console.log(e.massage)
    }
}