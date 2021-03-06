async function loadUsers({ commit }) {
	const response = await fetch('https://randomuser.me/api/?results=500');
	const users = await response.json();
	commit('loadUsers', users.results);
}

export { loadUsers };
