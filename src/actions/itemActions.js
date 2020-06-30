import { getItemsService, addItemService, delItemService, getCategoriesService, getSubcategoriesService, getProductsService} from '../services/aw_service';
import { GET_ITEMS, ADD_ITEM, DEL_ITEM, CURR_ITEM, ITEM_CATEGORY, ITEM_SUBCATEGORY, ITEM_PRODUCT } from './types';

export const getItems = (billId) => async dispatch => {
  const response = await getItemsService(billId);
  dispatch({
    type: GET_ITEMS,
    payload: response.data
  })
}

export const addItem = (item, token) => async dispatch => {
  const response = await addItemService(item, token);
  dispatch({
    type: ADD_ITEM,
    payload: response.data
  })
}

export const delItem = (item, token) => async dispatch => {
  const response = await delItemService(item, token);
  dispatch({
    type: DEL_ITEM,
    payload: item
  })
}

export const getCategories = () => async dispatch => {
  const response = await getCategoriesService();
  dispatch({
    type: ITEM_CATEGORY,
    payload: response.data
  })
}

export const getSubategories = (categoryId) => async dispatch => {
  const response = await getSubcategoriesService(categoryId);
  dispatch({
    type: ITEM_SUBCATEGORY,
    payload: response.data
  })
}

export const getProducts = (subcatId) => async dispatch => {
  const response = await getProductsService(subcatId);
  dispatch({
    type: ITEM_PRODUCT,
    payload: response.data
  })
}

export const currItem = item => {
  return ({
    type: CURR_ITEM,
    payload: item
  })
}


