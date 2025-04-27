

// Assuming multer.js is in the 'middlewares' folder
import upload from './multer.js';

import path from 'path';
import fs from 'fs';

// Create 'uploads' folder if not exists
const uploadPath = 'uploads/';
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath); // <-- Here you tell where to save
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Save with timestamp
  }
});

const upload = multer({ storage });

export default upload;
