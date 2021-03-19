<template>
	<div class="user-box">
		<div class="ig-user-img pointer " :class="storyClass">
			<img :src="user.picture?.thumbnail" :alt="user.login?.username" />
		</div>
		<div class="text">
			<p class="username b-600 pointer">
				{{ trimEmail(user.email) }}
			</p>
			<p class=" gray-txt">{{ user.login?.username }}</p>
		</div>
		<p class="right-text blue-txt b-600 pointer small-font">{{ rightText }}</p>
	</div>
</template>

<script>
export default {
	props: {
		user: Object,
		rightText: String,
		enabledStory: {
			type: Boolean,
			default: true,
		},
	},

	computed: {
		storyClass() {
			return this.enabledStory ? `story-${this.user.story?.mode}` : '';
		},
	},
};
</script>

<style lang="scss" scoped>
.user-box {
	display: flex;
	align-items: center;

	font-size: 14px;
	& > * + * {
		margin-left: 15px;
	}
}
.right-text {
	flex: 1;
	text-align: right;
}
</style>
