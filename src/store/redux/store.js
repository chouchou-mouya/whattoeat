import { configureStore } from '@reduxjs/toolkit'
import foodReducer from './reducers/food'

export default configureStore({
    // 可以直接使用 function name 作為屬性名稱 or 給予另外的屬性名稱
    reducer: {
        foodList: foodReducer,
    }
})