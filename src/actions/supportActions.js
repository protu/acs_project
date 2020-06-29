import { getCitiesService,} from '../services/aw_service';
import { GET_CITIES } from './types';

export const getCities = () => async dispatch => {
  const response = await getCitiesService();
  dispatch({
    type: GET_CITIES,
    payload: response.data
  })
}