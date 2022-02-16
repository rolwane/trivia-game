import { fetchToken } from '../../services/fetchApi';
import { SAVE_TOKEN, GET_LOGIN, SAVE_SCORE } from './types';

export const actionSaveToken = () => async (dispatch) => {
  const token = await fetchToken();
  dispatch({
    type: SAVE_TOKEN,
    payload: token,
  });
};

export const actionLogin = (payload) => ({
  type: GET_LOGIN,
  payload,
});

export const actionSaveScore = (payload) => ({
  type: SAVE_SCORE,
  payload,
});
