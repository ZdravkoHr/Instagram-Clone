<template>
	<div class="user-box">
		<div class="user-img ig-user-img" :class="storyClass">
			<img :src="data.picture.thumbnail" alt="userImg" />
		</div>
		<div class="user-info">
			<p class="username b">{{ data.login.username }}</p>
			<p class="user-details">{{ data.email }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: ['data'],
	computed: {
		storyClass() {
			return 'story-' + this.data.story.mode;
		},
	},
};
</script>

<style lang="scss" scoped>
.user-box {
	display: flex;
}

.user-img {
	margin: 0 10px;
	padding: 1px;
	width: 50px;
	height: 50px;
}

.user-info {
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	padding: 0 0 5px 10px;
}

.user-details {
	color: #b09e9e;
}
</style>
