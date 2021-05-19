<template>
	<div class="wrapper" ref="wrapper">
		<i
			class="fas fa-chevron-left prev"
			@click="currentSlide--"
			v-if="currentSlide !== 0"
		></i>
		<div class="content" ref="content">
			<slot name="items"></slot>
		</div>
		<i
			class="fas fa-chevron-right next"
			@click="currentSlide++"
			v-if="hasNext"
		></i>
	</div>
</template>
<script>
export default {
	data() {
		return {
			currentSlide: 0,
			percentStep: 60,
			contentEl: null,
			items: null,
			contentWidth: null,
			hasNext: false,
		};
	},
	updated() {
		const itemsCount = this.items.length;
		const itemWidth = this.items[0].offsetWidth;
		const marginRight = Number(
			window.getComputedStyle(this.items[0]).marginRight.slice(0, -2)
		);
		const totalWidth = itemsCount * (itemWidth + marginRight);
		const passedWidth =
			Math.abs((this.percentsAway / 100) * this.contentWidth) +
			this.contentWidth;

		this.hasNext = passedWidth <= totalWidth;
	},
	mounted() {
		this.contentEl = this.$refs.content;
		this.items = this.contentEl.children;
		this.contentWidth = this.contentEl.offsetWidth;
	},
	computed: {
		percentsAway() {
			return -this.percentStep * this.currentSlide;
		},
	},
	watch: {
		currentSlide() {
			this.$refs.content.style.marginLeft = this.percentsAway + '%';
		},
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
	position: relative;
	overflow: hidden;
	.prev,
	.next {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: #fff;
		border-radius: 50%;
		padding: 4px 7px;
		opacity: 0.8;
		text-align: center;
		cursor: pointer;
		color: #b3a5a5;
		box-shadow: 1px 1px 5px 0px #8e8181;
		z-index: 2;
	}

	.prev {
		left: 2%;
	}

	.next {
		right: 2%;
	}
}
.content {
	display: flex;

	color: #fff;

	margin: auto;
	padding: 1rem;
	margin-left: 0;
	transition: 0.4s ease-in;

	& > * {
		cursor: pointer;
	}
}
</style>
