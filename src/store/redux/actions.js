/**
 * @description 新增  
 * @param {string} content  內容
 * @return {{type: string, payload: {content: string}}} action 物件
 */
export function addTheFood(content) {
  return {
      type: 'foods/addTheFood',
      payload: {
          content
      }
  }
}

/**
* @description 刪除 todo 
* @param {string} id todo id
* @return {{type: string, payload: {index: Number}}} action 物件
*/
export function deleteTheFood(index) {
  return {
      type: 'foods/deleteFood',
      payload: {
          index
      }
  }
}
