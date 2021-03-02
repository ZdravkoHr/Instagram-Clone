<template>
	<header>
		<div class="content-wrapper content">
			<a href="#">
				<div class="logo img-holder">
					<img :src="require('@/assets/logo.png')" alt="logo" />
				</div>
			</a>
			<search-box></search-box>
		</div>
	</header>
</template>

<script>
import SearchBox from './SearchBox';
export default {
	components: {
		SearchBox,
	},
};
</script>

<style lang="scss" scoped>
header {
	background-color: rgba(250, 250, 250, 1);
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
</style>
