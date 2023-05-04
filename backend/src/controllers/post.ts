import {NextFunction, Request, Response} from "express";

import Post from '../models/post'
import {ExtendError} from "../types";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await Post.find()

    return res.status(200).json({
      items: posts,
      total: posts.length
    })
  } catch (e) {
    next(e)
  }
}

export const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params

    const posts = await Post.findOne({ _id: id })

    return res.status(200).json(posts)
  } catch (e) {
    next(e)
  }
}

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { text, firstName, lastName } = req.body

    if (!text) {
      throw new ExtendError('invalidData', 400, 'Invalid text')
    }

    const post = await Post.create({
      author: {
        firstName,
        lastName
      },
      text
    })

    return res.status(201).json(post)
  } catch (e) {
    next(e)
  }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const postId = req.params.id

    if (!postId) {
      throw new ExtendError('invalidData', 400, 'Post id is required')
    }

    const { text } = req.body

    if (!text) {
      throw new ExtendError('invalidData', 400, 'Invalid text')
    }

    const result = await Post.findOneAndUpdate({
      _id: postId
    }, {
      text
    }, { new: true, runValidators: true })

    if (result) {
      return res.status(200).send()
    } else {
      throw new ExtendError('notFoundData', 400, 'Post not found')
    }
  } catch (e) {
    next(e)
  }
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const postId = req.params.id

    if (!postId) {
      throw new ExtendError('invalidData', 400, 'Post id is required')
    }

    const result = await Post.findOneAndRemove({ _id: postId })

    if (result) {
      return res.status(200).send()
    } else {
      throw new ExtendError('notFoundData', 400, 'Post not found')
    }
  } catch (e) {
    next(e)
  }
}
