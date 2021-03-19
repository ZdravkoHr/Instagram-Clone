<template>
	<main>
		<div class="content">
			<stories-area class="stories-area"></stories-area>
			<div class="feed"></div>
		</div>
		<aside-view class="aside-view"></aside-view>
	</main>
</template>

<script>
import StoriesArea from '@/components/StoriesArea';
import AsideView from '@/components/Aside';
export default {
	components: {
		StoriesArea,
		AsideView,
	},
};
</script>

<style lang="scss" scoped>
main {
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
}
.content {
	width: 65%;
}

.aside-view {
	width: 35%;
}
</style>
