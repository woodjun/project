import { DECREMENT, INCREMENT } from "../constant";
// 同步操作返回一个对象{type: xxx, data: xxx}
export const createIncrementAction = (data) => ({type: INCREMENT, data: data * 1})

export const createDecrementAction = (data) => ({type: DECREMENT, data})

// 异步操作必须返回一个函数
export const createIncrementAsyncAction = (data, time = 0) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}