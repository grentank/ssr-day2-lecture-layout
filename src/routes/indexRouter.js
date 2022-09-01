import express from 'express';
import { Post } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const backendPosts = await Post.findAll();
  const initState = { path: req.originalUrl, backendPosts };
  res.layout(initState);
});

router.get('/about', (req, res) => {
  const initState = { path: req.originalUrl };
  res.layout(initState);
});

export default router;
