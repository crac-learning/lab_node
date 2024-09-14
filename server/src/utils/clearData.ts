import { IUserObject } from '../queries/user/types'

export const finalUser = (user: IUserObject) => {
  delete user.password
  return user
}
