<template>
	<div class="wrapper" :class="{ active }">
		<div class="search-box">
			<input
				type="search"
				placeholder="Търсене"
				v-model="searchValue"
				@focus="activate"
				:style="{
					backgroundImage:
						'url(' + require('@/assets/icons/search-icon.png') + ')',
				}"
			/>
			<div class="stop-icon" @click="stopSearching">
				<i class="fas fa-times-circle"></i>
			</div>
		</div>
		<div class="search-results-wrapper" v-if="isSearching">
			<div class="search-results">
				<user
					class="user"
					v-for="user in foundUsers"
					:key="user.id.value"
					:data="user"
				></user>
				<p v-if="notFound" class="not-found">No results found.</p>
			</div>
		</div>
	</div>
</template>

<script>
import User from './User';
export default {
	data() {
		return {
			active: false,
			searchValue: '',
			notFound: null,
		};
	},

	mounted() {
		this.$store.dispatch('loadUsers');
	},

	computed: {
		isSearching() {
			return this.active && this.searchValue;
		},
		foundUsers() {
			if (this.searchValue === '') {
				return [];
			}
			const foundUsers = this.$store.getters.searchedUsers(this.searchValue);
			this.notFound = !foundUsers.length;
			return foundUsers;
		},
	},

	methods: {
		stopSearching() {
			this.active = false;
			this.searchValue = '';
		},

		activate() {
			this.active = true;
		},

		deactivate(event) {
			const clicked = event.explicitOriginalTarget;
			if (
				clicked.classList.contains('stop-icon') ||
				clicked.parentElement?.classList.contains('stop-icon')
			) {
				return;
			}
			this.active = false;
		},
	},

	components: {
		User,
	},
};
</script>

<style lang="scss" scoped>
.wrapper {
	/* The next line does nothing to the element's style.
	 Its purpose is to make the .wrapper element containing block of the fixed-position .search-box  */
	transform: translateX(0);
	z-index: 999;
	&.active {
		input {
			text-align: left;
			background-position-x: 0;
		}

		.stop-icon {
			display: block;
		}
	}
	.search-box {
		border: 1px solid $gray-1;
		color: #b4a8a8;
		border-radius: 3px;
		display: flex;
		align-items: center;
		padding: 5px;
	}

	.search-results-wrapper {
		position: fixed;
		left: 50%;
		transform: translate(-50%, 13px);

		&::before {
			content: '';
			clip-path: polygon(50% 40%, 0 100%, 100% 100%);
			position: absolute;
			width: 20px;
			height: 20px;
			top: -20px;
			left: calc(50% - 20px);
			background: #fff;
		}
		&::after {
			content: '';
			clip-path: polygon(50% 40%, 0 95%, 100% 95%);
			position: absolute;
			width: 20px;
			height: 20px;
			top: -20px;
			left: calc(50% - 20px);
			background: $gray-1;
			z-index: -1;
		}
	}

	.search-results {
		height: auto;
		max-height: 360px;
		width: 360px;
		background: #fff;
		border-radius: 3px;
		overflow: auto;
		box-shadow: 1px 1px 11px 0px $gray-1;

		.user {
			margin: 10px 0;
			padding: 3px 0;
			cursor: pointer;
			font-size: 14px;

			&:hover {
				background-color: #f1f1f1;
			}
		}
	}

	input {
		border: 0;
		outline: 0;
		margin: 0 5px;
		background-size: contain;
		background-repeat: no-repeat;
		padding-left: 20px;
		text-align: center;
		background-position-x: 30%;
	}

	.stop-icon {
		display: none;
		font-size: 14px;
		cursor: pointer;
	}

	.not-found {
		margin: 20px;
		text-align: center;
		font-size: 18px;
	}
}
</style>
