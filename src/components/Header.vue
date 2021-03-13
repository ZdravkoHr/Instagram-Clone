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
				<router-link to="/home">
					<i class="fas fa-home"></i>
				</router-link>
				<router-link to="/direct">
					<i class="fas fa-paper-plane"></i>
					<div class="bubble-notification">
						{{ directCount }}
					</div>
				</router-link>
				<router-link to="explore" tag="div">
					<i class="far fa-compass"></i>
				</router-link>
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
			return this.$store.state.userImg;
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
	background: #ffffff;
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
