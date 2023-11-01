import { User, UserRoles } from "@coinbridge/user";
import { encryptPassword, generateAccessToken } from "@coinbridge/utils";

export class AuthService {
  static register = async (payload: any):Promise<any> => {
    let encryptedPass = encryptPassword(payload.pin);
    let role = payload.role;
    if (!role) {
      role = UserRoles.USER;
    }

    // check if user exists
    const existingUser = await User.findOne({ phone: payload.phone });
    if (existingUser) {
      return {
        status: false,
        error: {
          message: `User with phone ${payload.phone} already exists.`,
        },
      }
    }

    const user = await User.create(
      Object.assign(payload, { pin: encryptedPass, role })
    );

    // Generating an AccessToken for the user, which will be
    // required in every subsequent request.
    const accessToken = generateAccessToken(payload.phone, user.id);

    return {
      status: true,
      result: {
        user: user,
        accessToken: accessToken,
      },
    };
  }

  static loginWithPhoneAndPin = async (phone: string, pin: string):Promise<any> =>{
    return User.findOne({ 'phone': phone })
      .then((user) => {
        if (!user) {
          return {
            status: false,
            error: {
              message: `User with phone ${phone} not found.`,
            },
          }
        }

        const encryptedPassword = encryptPassword(pin);

        // IF Provided password does not match with the one stored in the DB
        // THEN Return password mismatch error
        if (user.pin !== encryptedPassword) {
          return {
            status: false,
            error: {
              message: 'Invalid phone or pin provided.',
            },
          }
        }

        const accessToken = generateAccessToken(user.phone, user.id);
        const userObj = {
          id : user.id,
          phone: user.phone,
          address: user.address,
          publicKey: user.publicKey,
        }
        return {
          status: true,
          result: {
            user: userObj,
            token: accessToken,
          },
        }
      })
      .catch((err) => {
        return {
          status: false,
          error: err,
        }
      });
  }
}
