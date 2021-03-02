<template>
	<header>
		<div class="wrapper content">
			<a href="#">
				<div class="logo img-holder">
					<img :src="require('@/assets/logo.png')" alt="logo" />
				</div>
			</a>
		</div>
	</header>
</template>

<style lang="scss" scoped>
header {
	background-color: rgba(250, 250, 250, 1);
}

.content {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.logo {
	width: 100px;
}
</style>
