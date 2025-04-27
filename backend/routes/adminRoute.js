// import express from 'express';
// import { addDoctor } from '../controllers/adminController.js';
// import upload from '../middlewares/multer.js';  // multer middleware for file upload

// const router = express.Router();

// // notice this: upload.single('image') is added here
// router.post('/add-doctor', upload.single('image'), addDoctor);

// export default router;



import express from 'express';
import upload from '../middlewares/multer.js'; // Make sure this is your multer setup
import { addDoctor } from '../controllers/adminController.js';

const router = express.Router();

// POST route to add doctor, which includes file upload
router.post('/add-doctor', upload.single('image'), addDoctor);

export default router;
