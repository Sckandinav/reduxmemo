import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	channels: [],
};

const channelsSlice = createSlice({
	name: 'channels_slice',
	initialState,
	reducers: {
		addChannel(state, action) {
			state.channels = action.payload;
		},
	},
});

export const { addChannel } = channelsSlice.actions;
export default channelsSlice.reducer;
