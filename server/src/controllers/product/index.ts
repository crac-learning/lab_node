import { Request, Response } from 'express'

import { StatusCodes } from 'http-status-codes'
import {
  validateProductCreate,
  validateProductSearch,
} from '../../validations/product'
import {
  create,
  findSelectedByKey,
  getProductWithRating,
  read,
} from '../../queries/product'
import { storeData } from '../../rawData/data'
import { IProduct } from '../../models/product'

// Controller function to get all products
export const ReadAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await read()

    if (products) {
      return res.status(StatusCodes.OK).json({
        error: null,
        data: products,
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

// Controller function to get filtered products
export const ReadFilteredProducts = async (req: Request, res: Response) => {
  try {
    const { category, gender } = req.body
    const products = await getProductWithRating({ category, gender })

    if (products) {
      return res.status(StatusCodes.OK).json({
        error: null,
        data: products,
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

// Controller function to get filtered products
export const BestSellerProducts = async (req: Request, res: Response) => {
  try {
    const products = await getProductWithRating({})

    const best = products?.sort((a, b) => b.reviews.length - a.reviews.length)

    // setTimeout(() => {
    return res.status(StatusCodes.OK).json({
      error: null,
      data: best?.slice(0, 4),
    })
    // }, 5000)
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}

// Controller function to create a new product
export const CreateProduct = async (req: Request, res: Response) => {
  try {
    validateProductCreate(req.body)

    const product = await create(req.body)

    if (product) {
      return res.status(StatusCodes.OK).json({
        error: null,
        data: product,
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

export const SearchProduct = async (req: Request, res: Response) => {
  try {
    validateProductSearch(req.body)

    const { searchTerm } = req.body

    const productList = await findSelectedByKey(
      {
        $or: [
          { title: { $regex: searchTerm, $options: 'i' } },
          { description: { $regex: searchTerm, $options: 'i' } },
          { sku: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
        ],
      },
      ''
    )

    return res.status(StatusCodes.OK).json({
      error: null,
      data: productList,
    })
  } catch (error: any) {
    res
      .status(StatusCodes.NOT_ACCEPTABLE)
      .json({ data: null, error: error.message })
  }
}

export const AddBulkProducts = async () => {
  const unfiledProduct: any[] = []

  storeData.map(async product => {
    unfiledProduct.push(create(product))
  })

  const proxut = await Promise.all(unfiledProduct)

  console.log('unfiledProduct', proxut)
}
