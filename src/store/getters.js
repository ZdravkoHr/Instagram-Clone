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

function randomUsers() {
	return async function(number) {
		const response = await fetch(
			`https://randomuser.me/api/?results=${number}`
		);

		return await response.json();
	};
}

function randomComments() {
	return async function() {
		
	}
}

function posts(state) {
	return async function(count, startingID) {
		const posts = [];
		for (let i = 0; i < count; i++) {
			const authorInfo = await randomUsers()(1);
			const author = new state.User(authorInfo);
			const postInfo = {
				author,
				id: startingID++,
				description: 'A picture of my cats!',
			};
			const post = await new state.Post(postInfo);
			await post.setLikes(randomUsers);
			await post.setComments(randomComments);
			posts[i] = post;
		}

		return [posts, startingID];
	};
}
export { searchedUsers, storyUsers, randomUsers, posts };
