function loadUsers(state, users) {
	users.forEach(user => {
		const storyModes = ['none', 'unvisited', 'visited', 'cf'];
		const randomNum = Math.floor(Math.random() * storyModes.length);
		user.story = {
			mode: storyModes[randomNum],
		};
	});

	state.users.push(...users);
	state.loggedUser = { ...users[0] };
}

export { loadUsers };
