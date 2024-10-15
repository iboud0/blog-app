import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomePage.vue';
import PostDetailView from '@/views/PostDetailView.vue';
import CreatePostView from '@/views/CreatePostView.vue';  // Ensure this is imported
import PostsByTagView from '@/views/PostsByTagView.vue'; 

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/posts/:id', name: 'PostDetail', component: PostDetailView },
  { path: '/addPost', name: 'AddPost', component: CreatePostView },  // Route for adding a post
  { path: '/tags/:tag', name: 'PostsByTag', component: PostsByTagView }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
