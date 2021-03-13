<template>
	<main>
		<div class="content">
			<stories-area class="stories-area"></stories-area>
			<div class="feed"></div>
		</div>
		<aside></aside>
	</main>
</template>

<script>
import StoriesArea from '@/components/StoriesArea';
export default {
	components: {
		StoriesArea,
	},
};
</script>

<style lang="scss" scoped>
main {
	display: grid;
	grid-template-columns: 60% 40%;
	margin-top: 30px;
}
</style>
