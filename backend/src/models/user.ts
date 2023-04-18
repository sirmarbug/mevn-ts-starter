import { Schema, model } from 'mongoose'
import {User} from "../types";

const userSchema = new Schema<User>({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String }
})

export default model("user", userSchema)
