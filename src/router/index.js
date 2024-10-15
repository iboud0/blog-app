import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CreatePostView from '@/views/CreatePostView.vue';
import PostDetailView from '@/views/PostDetailView.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/addPost', component: CreatePostView },
  { path: '/posts/:id', component: PostDetailView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
