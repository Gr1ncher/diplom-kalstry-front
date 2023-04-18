import { BrowserHistory } from 'history';
import { Epic as EpicRo } from 'redux-observable';
import { Action } from 'typescript-fsa';

import { AuthApi, HomeApi } from '@/features';
import { AuthState } from '@/features/auth/auth.types';

export interface BasicModel {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type Option<T> = T | null;

export interface ResponseError {
  statusCode: number;
  message: string | string[];
  error: string;
}

export interface RoDependencies {
  authApi: AuthApi;
  homeApi: HomeApi;
  history: BrowserHistory;
}

export interface RootState {
  auth: AuthState;
}

export type Epic<Input extends Action<any> = any, Output extends Input = Input> = EpicRo<
  Input,
  Output,
  RootState,
  RoDependencies
>;
