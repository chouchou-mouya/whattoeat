// state 初始值
const initialState = {
  email: "test@test.com",
  foods: [
    { food: "牛肉湯" },
    { food: "拉麵" },
    { food: "義大利麵" },
    { food: "炒飯" },
    { food: "日式定食" },
    { food: "鍋貼" },
    { food: "牛排" },
    { food: "滷味" },
  ],
};

/**
 * @description 處理 foods 相關的 reducer
 * @param {object} state 狀態值，會給予一個初始值 initialState
 * @param {object} action 動作
 */

function FoodsReducer(state = initialState, action) {
  // 根據不同類型的 action 做處理
  // 在 Redux 概念中所有的 state 更新是不可變的，因此需要複製原有的 state 進行修改
  switch (action.type) {
    case "foods/addTheFood": {
      return {
        ...state,
        foods: [...state.foods, action.payload.content],
      };
    }
    case "foods/deleteFood": {
      return {
        ...state,
        foods: state.foods.filter((_, index) => {
          return index !== action.payload.index;
        }),
      };
    }
    default:
      return state;
  }
}

export default FoodsReducer;
