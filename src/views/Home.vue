<template>
	<main>
		<div class="content">
			<stories-area class="stories-area"></stories-area>
			<div class="feed"></div>
		</div>
		<aside-view></aside-view>
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
	display: grid;
	grid-template-columns: 60% 40%;
	margin-top: 30px;
	grid-gap: 50px;
}
</style>
