import { Request, Response } from 'express'

import { StatusCodes } from 'http-status-codes'
import { validateProductReviewCreate } from '../../validations/productReview'
import { create, findSelectedByKey } from '../../queries/productReview'
import { read } from '../../queries/product'
import UserQueries from '../../queries/user'
import { IUserObject } from '../../queries/user/types'

// Controller function to create a new product review
export const CreateProductReview = async (req: Request, res: Response) => {
  try {
    validateProductReviewCreate(req.body)

    const productReview = await create(req.body)

    if (productReview) {
      return res.status(StatusCodes.OK).json({
        error: null,
        data: productReview,
      })
    } else {
      return res.status(StatusCodes.EXPECTATION_FAILED).json({
        error: 'Unknown error occured',
        data: null,
      })
    }
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}

// Controller function to create a new product review
export const GetProductReviews = async (req: Request, res: Response) => {
  try {
    const { productId } = req.body

    const productReviews = await findSelectedByKey({ product: productId }, '', [
      'user',
    ])

    const filteredReviews = productReviews?.map(item => ({
      _id: item._id,
      product: item.product,
      name: (item.user as IUserObject)?.fullName,
      review: item.review,
      rating: item.rating,
    }))

    return res.status(StatusCodes.OK).json({
      error: null,
      data: filteredReviews,
    })
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}

export const AddBulkReviews = async () => {
  try {
    const reviewPromises: any[] = []
    const products = await read()

    if (products && products.length) {
      const users = await UserQueries.read()

      if (users && users.length) {
        for (let i = 0, j = products.length; i < j; i++) {
          const reviewCount = Math.floor(Math.random() * 24)

          for (let k = 0; k < reviewCount; k++) {
            const userLength = users.length
            const userCount = Math.abs(
              Math.floor(Math.random() * userLength - 1)
            )
            const ratingRandom = Math.abs(Math.floor(Math.random() * 5))

            console.log('userCount', userCount)
            const review = {
              user: users?.[userCount]._id,
              product: products?.[i]._id,
              rating: ratingRandom,
              review:
                ratingRandom > 4
                  ? 'Amazing product. I love it'
                  : ratingRandom > 3
                  ? 'Love the material. Worth the money'
                  : ratingRandom > 2
                  ? 'It is ok. Not that great but fine'
                  : 'Not good at all. Please dont purchase. Waste of money',
            }

            reviewPromises.push(await create(review))
          }
        }

        const newReviews = await Promise.all(reviewPromises)

        console.log('Reviews', newReviews)
      }
    }
  } catch (error) {
    console.log('found error', error)
  }
}
