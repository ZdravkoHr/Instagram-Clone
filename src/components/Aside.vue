<template>
	<aside>
		<user-box
			:user="loggedUser"
			:rightText="'Превключване'"
			:enabledStory="false"
		></user-box>

		<div class="suggestions">
			<header>
				<h5 class="b-600 gray-txt">Предложения за вас</h5>
				<p class="small-font pointer b-600">Вижте всички</p>
			</header>
			<main>
				<user-box
					v-for="user in suggestedUsers"
					:key="user.id.value"
					:user="user"
					:rightText="'Последване'"
				></user-box>
			</main>
		</div>
		<footer>
			<div class="links">
				<a href="#">Относно</a>
				<a href="#">Помощ</a>
				<a href="#">Преса</a>
				<a href="#">API</a>
				<a href="#">Работа</a>
				<a href="#">Поверителност</a>
				<a href="#">Условия</a>
				<a href="#">Местоположения</a>
				<a href="#">Водещи акаунти</a>
				<a href="#">Хащагове</a>
				<a href="#">Език</a>
			</div>
			<p class="uppercase">© 2021 Instagram от Facebook</p>
		</footer>
	</aside>
</template>
<script>
import UserBox from './UserBox';

export default {
	data() {
		return {
			showedSuggestionsCount: 5,
		};
	},
	computed: {
		loggedUser() {
			return this.$store.state.loggedUser;
		},

		suggestedUsers() {
			const users = [];
			for (let i = 0; i < this.showedSuggestionsCount; i++) {
				users[i] = this.$store.state.users[i];
			}

			return users.some(user => user === undefined) ? [] : users;
		},
	},

	components: {
		UserBox,
	},
};
</script>

<style lang="scss" scoped>
aside {
	margin-left: 30px;
	& > .user-box {
		padding: 1.2rem 0 1rem 0;
	}
}

main {
	.user-box {
		margin-top: 10px;
	}
}

:deep(.ig-user-img) {
	flex-basis: 56px;
}

.suggestions {
	header {
		display: flex;
		justify-content: space-between;
	}

	:deep(.ig-user-img) {
		flex-basis: 35px;
	}
}

.small-font {
	font-size: 12px;
}

footer {
	word-wrap: break-word;
	color: rgb(199, 199, 199);
	margin-top: 20px;
	font-size: 11px;

	p {
		margin-top: 10px;
	}
	a {
		color: inherit;
		line-height: 1.6;
		text-decoration: none;
		display: inline-block;
		margin-right: 5px;
	}
}
</style>
