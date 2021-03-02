<template>
	<div class="wrapper">
		<div class="search-icon">
			<i class="fas fa-search"></i>
		</div>
		<input type="search" placeholder="Търсене" />
		<div class="stop-icon">
			<i class="fas fa-times-circle"></i>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
	border: 1px solid $gray-1;
	color: #b4a8a8;
	border-radius: 3px;
	display: flex;
	align-items: center;
	padding: 5px;

	input {
		border: 0;
		outline: 0;
		margin: 0 5px;
	}

	.search-icon {
		font-size: 12px;
		cursor: pointer;
	}

	.stop-icon {
		font-size: 14px;
		cursor: pointer;
	}
}
</style>
