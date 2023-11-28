import express from 'express';
import * as Controller from '../controller/store.js';


const router = express.Router();


router.post('/', Controller.get_store);


export default router;