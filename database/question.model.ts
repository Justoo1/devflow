import { Schema, model, models, Types } from "mongoose";

interface IQuestion {
  author: Types.ObjectId;
  title: string;
  content: string;
  tags: Types.ObjectId[];
  upvotes: number;
  downvotes: number;
  answers: number;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

const QuestionSchema = new Schema<IQuestion>({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  answers: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Question =
  models?.Question || model<IQuestion>("Question", QuestionSchema);

export default Question;
