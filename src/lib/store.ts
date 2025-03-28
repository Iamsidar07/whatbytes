import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from './features/score/scoreSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      score: scoreReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
