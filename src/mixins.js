const trimEmail = {
	methods: {
		trimEmail(email, delimiter = '@') {
			if (!email) return;
			const cutIndex = email.indexOf(delimiter);
			return email.substring(0, cutIndex);
		},
	},
};

const separateThousands = {
	methods: {
		separateThousands(num) {
			num = String(num);
			const length = num.length;
			let result = '';
			for (let i = length - 1; i >= 0; i--) {
				result = num[i] + result;
				if ((length - i) % 3 === 0 && i !== 0) {
					result = ',' + result;
				}
			}

			return result;
		},
	},
};

export default [trimEmail, separateThousands];
