import express from 'express';
import { test, updateVisaApplicant , deleteVisaApplicant} from '../controllers/visaApplicant.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', test);
router.post('/update/:id' , verifyToken , updateVisaApplicant);
router.delete('/delete/:id' , verifyToken , deleteVisaApplicant);
export default router;