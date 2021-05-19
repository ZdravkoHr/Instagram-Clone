class User {
	constructor(info) {
		this.info = info.results;
	}
}

class Post {
	constructor(info) {
		const { id, author, description } = info;
		this.id = id;
		this.author = author;
		this.description = description;

		// These will be filled in later
		this.comments = [];
		this.likes = [];
	}

	async setLikes(getUsers) {
		const likesCount = Math.floor(Math.random() * 200);
		const response = await getUsers()(likesCount);
		const users = response.results;

		users.forEach((user, index) => {
			this.likes[index] = new User(user);
		});
	}

	async setComments(getComments) {}
}

const data = {
	users: [],
	users2: [],
	loggedUser: {},
};

export default {
	...data,
	Post,
	User,
};
// export const userImg = 'https://randomuser.me/api/portraits/thumb/women/54.jpg';
