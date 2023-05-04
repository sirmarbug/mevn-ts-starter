import {NextFunction, Request, Response} from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user'
import {ExtendError} from "../types";

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      throw new ExtendError('invalidData', 400, 'All input is required')
    }

    const user = await User.findOne({ email })

    if (!user) {
      throw new ExtendError('invalidCredentials', 400, 'Invalid Credentials')
    }

    const comparePassword = await bcrypt.compare(password, user.password)

    if (!comparePassword) {
      throw new ExtendError('invalidCredentials', 400, 'Invalid Credentials')
    }

    const { TOKEN_KEY } = process.env

    const token = jwt.sign({
      userId: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    }, TOKEN_KEY || 'token')

    return res.status(200).json({
      token
    })
  } catch (e) {
    next(e)
  }
}

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { firstName, lastName, email, password } = req.body

    if (!firstName || !lastName || !password || !email) {
      throw new ExtendError('invalidData', 400, 'All input is required')
    }

    const oldUser = await User.findOne({ email })

    if (oldUser) {
      throw new ExtendError('userAlreadyExist', 409, 'User Already Exist. Please Login')
    }

    const encryptedPassword = await bcrypt.hash(password, 10)

    await User.create({
      firstName,
      lastName,
      email,
      password: encryptedPassword
    })

    return res.status(201).send()

  } catch (e) {
    next(e)
  }
}
