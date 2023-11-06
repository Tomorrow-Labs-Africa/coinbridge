import { Request, Response } from 'express';
import { AirtimeService, MobileMoneyService, PaymentService } from '@coinbridge/transactions'

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

  public static async sendToMpesaPaybill(req: Request, res: Response): Promise<void> {
    try {
      const response = await PaymentService.payBill(req.body.businessName, req.body.amount, req.body.paybillNumber, req.body.narrative);
      if(response === undefined){
        res.status(500).json({ status: false, message: "Error sending to paybill" });
      } else{
        res.status(200).json({ status: true, data: response });
      }
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }

  public static async sendToMpesaTillNumber(req: Request, res: Response): Promise<void> {
    try {
      const response = await PaymentService.buyGoods(req.body.businessName, req.body.tillNumber, req.body.amount, req.body.narrative);  
      res.status(200).json({ status: true, data: response });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
}

export default TransactionController;

