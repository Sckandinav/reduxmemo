import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUsersThunk from './api/getUsers';

import getUsers from './selectors/users';
import './App.css';

function App() {
	const dispatch = useDispatch();

	const users = useSelector(getUsers);

	useEffect(() => {
		dispatch(getUsersThunk());
	}, [dispatch]);
	return (
		<div className='App'>
			<h1>Users</h1>
			<ul className='users__list'>
				{users.map(user => (
					<li className='user__item' key={user.id}>
						<p>
							<span>User Name: </span>
							{user.name}
						</p>
						<p>
							{' '}
							<span>User phone: </span>
							{user.phone}
						</p>
						<p>
							<span>User website: </span>
							{user.website}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
