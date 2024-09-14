import { compare, hash } from 'bcrypt'

export const encodeString = async (password: string): Promise<string> => {
  const hashedPwd = await hash(password, 10)
  return hashedPwd
}

export const compareString = async (
  received: string,
  stored: string
): Promise<boolean> => {
  const isValid = await compare(received, stored)
  return isValid
}
