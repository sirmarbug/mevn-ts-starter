import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user'

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        error: {
          message: 'All input is required'
        }
      })
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        error: {
          message: 'Invalid Credentials'
        }
      })
    }

    const comparePassword = await bcrypt.compare(password, user.password)

    if (!comparePassword) {
      return res.status(400).json({
        error: {
          message: 'Invalid Credentials'
        }
      })
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
    return res.status(500).json(e)
  }
}

export const register = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body

    if (!firstName || !lastName || !password || !email) {
      return res.status(400).json({
        error: {
          message: 'All input is required'
        }
      })
    }

    const oldUser = await User.findOne({ email })

    if (oldUser) {
      return res.status(409).json({
        error: {
          message: 'User Already Exist. Please Login'
        }
      })
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
    return res.status(500).json(e)
  }
}
