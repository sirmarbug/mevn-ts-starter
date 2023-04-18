import {model, Schema} from "mongoose";
import {PostDocument} from "../types";

const postSchema = new Schema<PostDocument>({
  author: {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
  },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now }
})

export default model("post", postSchema)
