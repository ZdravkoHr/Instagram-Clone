<template>
	<div class="post round-box">
		<nav>
			<div class="ig-user-img pointer">
				<img :src="authorImage" :alt="authorImage" />
			</div>
			<div class="text">
				<a class="username b-600" href="#">
					<span class="pointer">{{ authorUsername }}</span></a
				>
				<span class="show-options pointer">...</span>
			</div>
		</nav>
		<div class="post-items">
			<img
				src="https://instagram.fsof11-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/168887867_298109078393307_7685162153252756323_n.jpg?tp=1&_nc_ht=instagram.fsof11-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=2fT2TU4cXvEAX-E_pgk&edm=AIQHJ4wAAAAA&ccb=7-4&oh=cd2e649c44c58702ca6089272c3832cc&oe=6090B571&_nc_sid=7b02f1"
				alt=""
			/>
		</div>
		<div class="post-info">
			<div class="interactions">
				<heart-icon></heart-icon>
				<comment-icon></comment-icon>
				<direct-icon></direct-icon>
				<bookmark-icon></bookmark-icon>
			</div>
			<p class="likes b-600">
				{{ likes }}
				{{ separateThousands(post.likes.length) }} харесвания
			</p>
			<div class="comments">
				<comment v-if="post.description"></comment>
			</div>
		</div>
	</div>
</template>

<script>
// Importing icons
import HeartIcon from './InstagramIcons/Heart';
import CommentIcon from './InstagramIcons/Comment.vue';
import DirectIcon from './InstagramIcons/Direct';
import BookmarkIcon from './InstagramIcons/Bookmark';

// Importing other stuff
import Comment from './Comment';

export default {
	props: ['post'],

	computed: {
		authorUsername() {
			return this.post.author.info[0].login.username;
		},
		authorImage() {
			return this.post.author.info[0].picture.thumbnail;
		},
	},

	components: {
		HeartIcon,
		CommentIcon,
		DirectIcon,
		BookmarkIcon,
		Comment,
	},
};
</script>

<style lang="scss" scoped>
.post {
	& > * {
		padding: 0.5rem 1rem;
	}
	&-items {
		padding: 0;
	}
}

nav {
	display: flex;
	align-items: center;
	border-bottom: 1px solid $gray-1;

	.ig-user-img {
		flex-basis: 40px;
	}

	.text {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-grow: 1;
	}

	.username {
		font-size: 14px;
		padding-left: 10px;
		text-decoration: none;
	}

	.show-options {
		font-size: 24px;
		transform: translateY(-8px);
		user-select: none;
	}
}

.post-info {
	.comments-icon {
		transform: rotateY(180deg);
	}

	.bookmark-icon {
		position: absolute;
		right: 10px;
	}
}

.interactions {
	position: relative;
	font-size: 25px;
	& > * {
		margin-right: 10px;
		cursor: pointer;
	}

	& > *:last-child {
		position: absolute;
		right: 0;
	}
}
</style>
