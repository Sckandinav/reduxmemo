import { getUsers } from '../slices/user';

const getUsersThunk = () => async dispatch => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data => dispatch(getUsers(data)));
};

export default getUsersThunk;
