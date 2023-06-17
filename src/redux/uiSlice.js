import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		lang: null,
		texts: null,
	},

	reducers: {
		changeLang: (state, { payload }) => {
			if (payload == state.lang) {
				return;
			} else {
				state.lang = payload;
				console.log(state.lang);
			}
		},
	},
});

export const { changeLang } = uiSlice.actions;
