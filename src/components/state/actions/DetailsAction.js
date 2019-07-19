
const BASE_URL = "http://localhost:3001";
import axios from 'axios'
export function getDetails() {
    return async function (dispatch, getState) {
        const response = await axios.get(`${BASE_URL}/profile`);        
        dispatch ({
            type: "GET_DETAILS",
            payload: response
        })
    }
}