import express from 'express';
import { Student, Post } from '../db/models';

const router = express.Router();

router.get('/students', async (req, res) => {
  const allStudents = await Student.findAll();
  res.json(allStudents);
});

router.get('/students/:id', async (req, res) => {
  const { id } = req.params;
  const oneStudent = await Student.findByPk(id);
  res.json(oneStudent);
});

router.post('/posts', async (req, res) => {
  const newPost = await Post.create({ title: req.body.title });
  res.json(newPost);
});

router.get('/posts', async (req, res) => {
  const allPosts = await Post.findAll();
  res.json(allPosts);
});

router.delete('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Post.destroy({ where: { id } });
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
