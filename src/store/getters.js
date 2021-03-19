function searchedUsers(state) {
	return function(text) {
		return state.users.filter(({ login }) => {
			return login.username.includes(text);
		});
	};
}

function storyUsers(state) {
	return state.users.filter(({ story }) => {
		return story.mode === 'unvisited' || story.mode === 'cf';
	});
}
export { searchedUsers, storyUsers };
