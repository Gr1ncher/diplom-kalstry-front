import { authReducer } from '@/features/auth/auth.reducer';
import { homeReducer } from '@/features/home/home.reducer';
import { loadingReducer } from '@ro-loading';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  loading: loadingReducer,
});
