import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    walletinfo : {
        balance: 0,
        address: '',
        stake: ''
    },
    walletModal: false,
    walletName: ''
};

export const walletReducer = createSlice({
    name: 'wallet',
    initialState: initialState,
    reducers: {
        walletInformation: (state, action) => {
			state.walletinfo = action.payload;
		},
        walletModalShow: (state) => {
			state.walletModal = true;
		},
		walletModalhide: (state) => {
			state.walletModal = false;
		},
        poolWalletName: (state, action) => {
            state.walletName = action.payload;
        }
    }
});

export const {
    walletModalShow,
	walletModalhide,
    poolWalletName,
	walletInformation
} = walletReducer.actions;


export default walletReducer.reducer;
