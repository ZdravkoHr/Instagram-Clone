<template>
	<div class="user-wrapper">
		<div class="user-img ig-user-img" :class="storyClass">
			<img :src="userData.picture.thumbnail" :alt="userData.login.username" />
		</div>
		<p class="username">{{ username }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			maxUsernameLength: 10,
		};
	},
	props: ['userData'],
	computed: {
		storyClass() {
			return 'story-' + this.userData.story.mode;
		},
		username() {
			const username = this.userData.login.username;
			if (username.length <= 10) {
				return username;
			}

			return username.substring(0, this.maxUsernameLength + 1) + '...';
		},
	},
};
</script>

<style scoped>
.user-wrapper {
	margin-right: 15px;
	width: 70px;
	position: relative;
	left: 0;
}
.username {
	font-size: 10px;
	color: #000;
	text-align: center;
}
.ig-user-img {
	width: 65px;
	margin: auto;
}
</style>
