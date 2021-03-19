const trimEmail = {
	methods: {
		trimEmail(email, delimiter = '@') {
			if (!email) return;
			const cutIndex = email.indexOf(delimiter);
			return email.substring(0, cutIndex);
		},
	},
};

export default [trimEmail];
