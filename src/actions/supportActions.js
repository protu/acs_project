import { getCitiesService, getSellersService} from '../services/aw_service';
import { GET_CITIES, GET_SELLERS } from './types';

export const getCities = () => async dispatch => {
  const response = await getCitiesService();
  dispatch({
    type: GET_CITIES,
    payload: response.data
  })
}

export const getSellers = () => async dispatch => {
  const response = await getSellersService();
  dispatch({
    type: GET_SELLERS,
    payload: response.data
  })
}