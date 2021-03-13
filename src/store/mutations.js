function loadUsers(state, users) {
	users.forEach(user => {
		const storyModes = ['none', 'unvisited', 'visited', 'cf'];
		const randomNum = Math.floor(Math.random() * storyModes.length);
		user.story = {
			mode: storyModes[randomNum],
		};
	});

	state.users.push(...users);
}

export { loadUsers };
