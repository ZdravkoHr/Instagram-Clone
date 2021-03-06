import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Direct from '@/views/Direct.vue';
import Explore from '@/views/Explore.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		alias: '/home',
	},
	{
		path: '/direct',
		name: 'direct',
		component: Direct,
	},

	{
		path: '/explore',
		name: 'explore',
		component: Explore,
	},
	//   {
	//     path: '/about',
	//     name: 'About',
	//     // route level code-splitting
	//     // this generates a separate chunk (about.[hash].js) for this route
	//     // which is lazy-loaded when the route is visited.
	//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	//   }
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
