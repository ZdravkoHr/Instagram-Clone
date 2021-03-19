<template>
	<section>
		<div class="ig-user-img" :class="`story-${userData.story.mode}`">
			<img :src="userData.picture.thumbnail" :alt="userData.username" />
		</div>
		<div class="user-info">
			<p>{{ trimEmail(userData.email) }}</p>
		</div>
	</section>
</template>
<script>
export default {
	props: ['userData'],
};
</script>

<style lang="scss" scoped>
.ig-user-img {
	flex-basis: 40px;
	margin-top: 10px;
}
</style>
