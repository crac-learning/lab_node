import jwt from 'jsonwebtoken'

export const createJWTToken = (username: string, id: string) => {
  // console.log("secret key", process.env.JWTSECRET);
  return jwt.sign({ username, id }, process.env.JWTSECRET || '')
}
