import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from '../../../redux/store';

interface loginState
{
    token: string | null,
}
const token = sessionStorage.getItem('token')
  ? JSON.parse(sessionStorage.getItem('token') || '{}')
  : null;

const initialState: loginState = {
  token,
};
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      sessionStorage.setItem('token', JSON.stringify(action.payload));
      return {
        ...state,
        token: action.payload,
      };
    },
    logoutSuccess: (state, action: PayloadAction<null>) => {
      sessionStorage.removeItem('token');
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

export default loginSlice;

export const accessToken = (state: RootState)
  : string | null => state.login.token;

const { loginSuccess, logoutSuccess } = loginSlice.actions;

export const login = (
  email: string,
  password: string,
) => async (dispatch: AppDispatch): Promise<void> => {
  // perfom login actions
  // dummy token to be stubbed with a backend
  dispatch(loginSuccess(`${email}${password}`));
};

export const logout = () => async (dispatch: AppDispatch)
  : Promise<void> => {
  dispatch(logoutSuccess(null));
};
