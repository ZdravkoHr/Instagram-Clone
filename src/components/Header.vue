<template>
	<header>
		<div class="content-wrapper content">
			<a href="#">
				<div class="logo img-holder">
					<img :src="require('@/assets/logo.png')" alt="logo" />
				</div>
			</a>
			<search-box></search-box>
			<div class="icons">
				<div>
					<i class="fas fa-home"></i>
				</div>
				<div>
					<i class="fas fa-paper-plane"></i>
					<div class="bubble-notification">
						{{ directCount }}
					</div>
				</div>
				<div>
					<i class="far fa-compass"></i>
				</div>
				<div><i class="far fa-heart"></i></div>
				<div class="img-holder user-img">
					<img :src="userImg" alt="user image" />
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import SearchBox from './SearchBox';
export default {
	components: {
		SearchBox,
	},
	computed: {
		userImg() {
			return this.$store.state.data.userImg;
		},
		directCount() {
			return 2;
		},
	},
};
</script>

<style lang="scss" scoped>
header {
	border-bottom: 1px solid $gray-1;
}

.content {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.logo {
	width: 100px;
}

.icons {
	display: flex;
	align-items: center;
	font-size: 20px;

	& > * {
		margin: 0 10px;
		cursor: pointer;
		position: relative;
	}

	.img-holder {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		overflow: hidden;
	}
}
</style>
