import express from 'express';
import { Student } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const allStudents = await Student.findAll();
  const initState = { path: req.originalUrl, allStudents };
  res.layout(initState);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const studentById = await Student.findByPk(id);
  const initState = { path: req.originalUrl, studentById };
  res.layout(initState);
});

export default router;
