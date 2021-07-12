import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../views/Pages/Login/LoginRedux';

const store = configureStore({
  reducer: {
    // add reducer slices here
    login: loginSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
