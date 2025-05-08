import express from 'express';
import upload from '../middlewares/multer.js'; 
import { addDoctor, allDoctors, loginAdmin } from '../controllers/adminController.js';
import authAdmin from '../middlewares/authAdmin.js';



const router = express.Router();

// Routes
router.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);
router.post('/login', loginAdmin);
router.post('/all-doctors', authAdmin, allDoctors);
router.get('/test', (req, res) => {
  res.send("Test route working");
});

export default router;
