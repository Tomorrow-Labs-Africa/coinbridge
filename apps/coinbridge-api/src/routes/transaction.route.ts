import express from 'express';
import TransactionController from '../controllers/transaction.controller';

const router = express.Router();

import isAuthenticatedMiddleware from '../middlewares/is-authenticated.middleware';

// POST /transactions
router.post('/sendMobileMoney',[isAuthenticatedMiddleware], TransactionController.sendMobileMoney);
router.post('/requestMobileMoney',[isAuthenticatedMiddleware], TransactionController.requestMpesaPayment);
router.post('/buyAirtime',[isAuthenticatedMiddleware], TransactionController.buyAirtime);

export default router;