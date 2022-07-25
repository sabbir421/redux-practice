import axios from "axios"
import { failData, getData, getSuccess } from "../Variable/variable"

export const getToDos = ()=> async(dispatch)=>{
    dispatch({type:getData})
    try {
        const res= await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch({type:getSuccess, payload:res.data})
    } catch (error) {
        dispatch({type:failData, payload:error.message})
    }
}