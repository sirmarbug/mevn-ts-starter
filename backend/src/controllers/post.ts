import {Request, Response} from "express";

import Post from '../models/post'

export const getAll = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find()

    return res.status(200).json({
      items: posts,
      total: posts.length
    })
  } catch (e) {
    return res.status(500).json(e)
  }
}

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const posts = await Post.findOne({ _id: id })

    return res.status(200).json(posts)
  } catch (e) {
    return res.status(500).json(e)
  }
}

export const create = async (req: Request, res: Response) => {
  try {
    const { text, firstName, lastName } = req.body

    if (!text) {
      return res.status(400).json({
        error: {
          message: 'text is required'
        }
      })
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
    return res.status(500).json(e)
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id

    if (!postId) {
      return res.status(400).json({
        error: {
          message: "Post id is required"
        }
      })
    }

    const { text } = req.body

    if (!text) {
      return res.status(400).json({
        error: {
          message: 'Text is required'
        }
      })
    }

    const result = await Post.findOneAndUpdate({
      _id: postId
    }, {
      text
    }, { new: true, runValidators: true })

    if (result) {
      return res.status(200).send()
    } else {
      return res.status(404).json({
        error: {
          message: "Post not found"
        }
      })
    }
  } catch (e) {
    return res.status(500).json(e)
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id

    if (!postId) {
      return res.status(400).json({
        error: {
          message: "Post id is required"
        }
      })
    }

    const result = await Post.findOneAndRemove({ _id: postId })

    if (result) {
      return res.status(200).send()
    } else {
      return res.status(404).json({
        error: {
          message: "Post not found"
        }
      })
    }
  } catch (e) {
    return res.status(500).json(e)
  }
}
