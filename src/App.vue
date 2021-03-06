<template>
	<main-header></main-header>
	<main>
		<router-view class="content-wrapper"></router-view>
	</main>
</template>

<style lang="scss">
@import './src/styles/main.scss';
</style>

<script>
import MainHeader from './components/Header';
export default {
	components: { MainHeader },
};
</script>
