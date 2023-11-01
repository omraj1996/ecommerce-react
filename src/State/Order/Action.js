//import { GET_ORDER_BY_ID_REQUEST, GET_ORDER_HISTORY_FAILURE, GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS } from "./ActionType"

//import axios from "axios";
import { api } from "../../config/apiConfig";
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "./ActionType";

export const createOrder = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });
  try {
    // const config = {
    //     headers:{
    //         "Content-Type":"application/json",
    //         Authorization:`Bearer ${reqData.jwt}`,
    //     },
    // };
    const { data } = await api.post(
      `/api/orders/`,
      reqData.address
      //config
    );
    if (data.id) {
      reqData.navigate({ search: `step=3&order_id=${data.id}` });
    }
    console.log("created order - ", data);
    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("catch error : ", error);
    dispatch({
      type: CREATE_ORDER_FAILURE,
      payload: error.message,
      // error.response && error.response.data.message
      //     ? error.response.data.message
      //     : error.message,
    });
  }
};

export const getOrderById = (orderId) => async (dispatch) => {
  console.log("get order req ", orderId);
  dispatch({ type: GET_ORDER_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/orders/${orderId}`);
    console.log("order by id", data);
    dispatch({
      type: GET_ORDER_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("catch error ", error);
    dispatch({
      type: GET_ORDER_BY_ID_FAILURE,
      payload: error.message,
    });
  }
};

// export const getOrderHistory = (reqData)=> async(dispatch,getState)=>{
//     try {
//         dispatch({type:GET_ORDER_HISTORY_REQUEST});
//         const config ={
//             headers:{
//                 Authorization:`Bearer ${reqData.jwt}`,
//             },
//         };
//         const {data}=await api.get(`/api/orders/user`);
//         console.log("order history---------",data);
//         dispatch({
//             type:GET_ORDER_HISTORY_SUCCESS,
//             payload:data,
//         });
//     } catch (error) {
//         dispatch({
//             type:GET_ORDER_HISTORY_FAILURE,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     :error.message,
//         });
//     }
// };
