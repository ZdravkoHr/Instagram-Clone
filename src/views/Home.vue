<template>
	<main>
		<div class="content">
			<stories-area class="stories-area"></stories-area>
			<div class="feed">
				<post v-for="post in posts" :key="post.id" :post="post"></post>
			</div>
		</div>
		<aside-view class="aside-view"></aside-view>
	</main>
</template>

<script>
import StoriesArea from '@/components/StoriesArea';
import Post from '@/components/Post';
import AsideView from '@/components/Aside';

export default {
	data() {
		return {
			postsIndex: 0,
			posts: [],
		};
	},

	mounted() {
		this.addPosts(1);
	},

	methods: {
		async addPosts(postsCount) {
			const [newPosts, newPostsIndex] = await this.$store.getters.posts(
				postsCount,
				this.postsIndex
			);

			this.posts = [...this.posts, ...newPosts];
			this.postIndex = newPostsIndex;
			return;
		},
	},

	components: {
		StoriesArea,
		AsideView,
		Post,
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

.feed {
	.post {
		margin: 1.5rem 0;
	}
}
</style>
