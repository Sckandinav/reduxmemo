import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import messagesReducer from './messages';
import channelsReducer from './channels';

const store = configureStore({
	reducer: {
		user: userReducer,
		channels: channelsReducer,
		messages: messagesReducer,
	},
});

export default store;
