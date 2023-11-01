import { Schema,model } from "mongoose";
import { UserRoles } from "./enums/user-roles";
const userSchema = new Schema({
    phone: {
        required: true,
        type: String
    },
    address:{
        required: true,
        type: String
    },
    publicKey: {
        required: true,
        type: String
    },
    privateKey: {
        required: true,
        type: String
    },
    seedPhrase: {
        required: true,
        type: String
    },
    createdAt: {
      type: Date
    },
    role: {
      type: String,
      enum: Object.values(UserRoles),
      default: 'user'
    },
    pin: {
      type: String,
    },
});
export const User = model("User", userSchema);
