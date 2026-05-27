import { Router } from 'express';

const notesRoutes = Router();

notesRoutes.get('/notes', (req, res) => {
  res.json([]);
});

export default notesRoutes;
