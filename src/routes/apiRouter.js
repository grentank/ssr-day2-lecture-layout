import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mood: 'Exciting!', lol: 'kek' });
});

export default router;
