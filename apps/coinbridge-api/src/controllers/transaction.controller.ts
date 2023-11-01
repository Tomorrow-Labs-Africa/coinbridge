import { Request, Response } from 'express';
import { AirtimeService, MobileMoneyService } from '@coinbridge/transactions'

class TransactionController {

  public static sendMobileMoney(req: Request, res: Response): void {
    let response = MobileMoneyService.sendMobileMoney(req.body.phoneNumber, req.body.name, req.body.amount);
    res.status(200).json({ status: true, data: response });
  }

  public static requestMpesaPayment(req: Request, res: Response): void {
    let response = MobileMoneyService.collectMobileMoney(req.body.firstName, req.body.lastName, req.body.email, req.body.phoneNumber, req.body.amount);
    res.status(200).json({ status: true, data: response });
  }

  public static buyAirtime(req: Request, res: Response): void {
    let response = AirtimeService.buyAirtime(req.body.phoneNumber, req.body.amount);
    res.status(200).json({ status: true, data: response });
  }
}

export default TransactionController;