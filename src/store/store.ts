// src/redux/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import categorySlice from './categorySlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Persist only the cart
const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ['cartItems'],
};

// Combine reducers
const rootReducer = combineReducers({
  cartItems: cartSlice,       // this will be persisted
  category: categorySlice,    // this will not be persisted
});

// Apply persistence to the part we want
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
