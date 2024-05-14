import { createSlice } from '@reduxjs/toolkit';

//1:43:35
const initialState = {
	users: [],
};

const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		clear_state(state, action) {
			state = initialState;
		},
		getUsers(state, action) {
			state.users = action.payload;
		},
	},
});

export const { clear_state, getUsers } = userSlice.actions;
export default userSlice.reducer;
