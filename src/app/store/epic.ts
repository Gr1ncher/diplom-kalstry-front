import { authEpics, homeEpic } from '@/features';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(authEpics, homeEpic);
