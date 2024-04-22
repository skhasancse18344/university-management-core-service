import express from 'express';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/',
    routes: express.Router(), // Create a new router instance for each route
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
