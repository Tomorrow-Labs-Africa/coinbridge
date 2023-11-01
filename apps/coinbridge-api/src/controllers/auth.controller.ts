import { Request, Response } from 'express';
import { AuthService } from '@coinbridge/auth';



class TransactionController {
  public static register(req: Request, res: Response): void {
      const payload = req.body;
      AuthService.register(payload).then((result) => {
        if (!result.status) {
          return res.status(400).json({
            status: false,
            error: result.error,
          });
        }

        return res.status(200).json({
          status: true,
          data: result.result,
        });
      }
      ).catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  }

  public static login(req: Request, res: Response): void {
    const { phone, pin } = req.body;
    AuthService.loginWithPhoneAndPin(phone, pin).then((result) => {
      if (!result.status) {
        return res.status(400).json({
          status: false,
          error: result.error,
        });
      }

      return res.status(200).json({
        status: true,
        data: result.result,
      });
    }
    ).catch((err) => {
      return res.status(500).json({
        status: false,
        error: err,
      });
    });
  }

}


export default TransactionController;