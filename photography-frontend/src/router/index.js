import { createRouter, createWebHistory } from 'vue-router';
import Portfolio from '@/views/Portfolio.vue';
import Booking from '@/views/Booking.vue';

const routes = [
    { path: '/', component: Portfolio }, // Ensure a default route is set
    { path: '/portfolio', component: Portfolio },
    { path: '/appointment', component: Booking },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

