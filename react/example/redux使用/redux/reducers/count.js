import { DECREMENT, INCREMENT } from "../constant";

const initState = 0
// reducer必须是一个函数，参数有两个：preState之前状态、action操作行为
export default function countReducer(preState=initState, action) {
    const {type, data} = action

    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState;
    }
}