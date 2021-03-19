<template>
	<div class="round-box">
		<carousel>
			<template v-slot:items>
				<story-user
					v-for="user in users"
					:key="user.id.value"
					:userData="user"
				></story-user>
			</template>
		</carousel>
	</div>
</template>

<script>
import Carousel from './Carousel';
import StoryUser from './StoryUser';

export default {
	computed: {
		users() {
			return this.$store.getters.storyUsers;
		},
	},

	components: {
		Carousel,
		StoryUser,
	},
};
</script>

<style lang="scss" scoped></style>
