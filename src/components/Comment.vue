<template>
	<p class="comment">
		<span class="b author">author</span> <span class="content"> Text</span>
		<span class="like-icon" v-if="!isDescription">Heart</span>
	</p>
</template>

<script>
import Heart from './InstagramIcons/Heart';
export default {
	props: ['info'],
	computed: {
		isDescription() {
			return info.isDescription;
		},
	},
	components: {
		Heart,
	},
};
</script>
