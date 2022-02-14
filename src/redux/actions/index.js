import { fetchToken } from '../../services/fetchApi';
import { SAVE_TOKEN } from './types';

export const actionSaveToken = () => async (dispatch) => {
  const token = await fetchToken();
  dispatch({
    type: SAVE_TOKEN,
    payload: token,
  });
};

export const actionLogin = () => ({});
