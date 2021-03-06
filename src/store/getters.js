function searchedUsers(state) {
	return function(text) {
		return state.data.users.filter(({ login }) => {
			return login.username.includes(text);
		});
	};
}

export { searchedUsers };
