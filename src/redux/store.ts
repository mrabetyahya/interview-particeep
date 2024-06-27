import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import moviesSlice from './slices/movies/moviesSlice';

const rootReducer = combineReducers({
  moviesReducer: moviesSlice,
});
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
