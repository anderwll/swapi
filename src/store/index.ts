import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'app',
  storage,
} 

const persistedReducer = persistReducer(persistConfig, rootReducer);

const myStore = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(myStore);

export { myStore, persistor }
export type RootState = ReturnType<typeof myStore.getState>; 
export type AppDispatch = typeof myStore.dispatch;