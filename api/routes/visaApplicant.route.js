import express from 'express';
import { test, updateVisaApplicant } from '../controllers/visaApplicant.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', test);
router.post('/update/:id' , verifyToken , updateVisaApplicant);

export default router;