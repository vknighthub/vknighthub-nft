import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import counterReducer from './counterSlice';
import nftReducer  from './reducers/nftReducer';
import walletReducer from './reducers/walletReducer';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		nftmarketplace: nftReducer,
		wallet: walletReducer,
	},
});
