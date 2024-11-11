import { model, models, Schema, Types } from "mongoose";

interface IAccount {
  name: string;
  userId: Types.ObjectId;
  image?: string;
  providerAccountId: string;
  password?: string;
  provider: string;
}

const AccountSchema = new Schema<IAccount>(
  {
    name: { type: String, required: true },
    password: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    image: { type: String },
    providerAccountId: { type: String, required: true },
    provider: { type: String, required: true },
  },
  { timestamps: true }
);

const Account = models?.Account || model<IAccount>("Account", AccountSchema);

export default Account;
