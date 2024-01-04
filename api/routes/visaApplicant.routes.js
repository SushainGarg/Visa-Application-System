import express from 'express';
import { test } from '../controllers/visaApplicant.controller.js';

const Router = express.Router();

Router.get('/', test);

export default Router;