import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import passport from 'passport'
import session from 'express-session'
import cors from 'cors'
import path from 'path'

// ************** dev server dependencies ************** //
import http from 'http'

// Configuration for environment variables
// const PORT= 8000
// const JWTSECRET= 'CyberSecLab'
// const DB_PATH= 'mongodb+srv://defmax:98eFOEMYSS0ht2V0@defhawk-test.i7fmmop.mongodb.net/ecom-lab'

console.log( path.resolve( __dirname ,  '../.env.development' ));

dotenv.config({ path: path.resolve( __dirname ,  '../.env.development' ) }
)

import ConectDB from './config/db'
import privateRouteConfig from './config/route.config'
import corsConfig from './config/cors'
import routes from './routers'

// Authoraization configuration using passport-jwt
privateRouteConfig(passport)

const app = express()
const port = process.env.PORT || 8000

app.use(cors(corsConfig))
app.use(express.json()) // json-encoded bodies

app.use(
  session({
    secret: process.env.JWTSECRET || '',
    resave: true,
    saveUninitialized: true,
  })
) // session data-encryption

// Initialise Passport middleware
app.use(passport.initialize()) // authentication middleware
app.use(passport.session()) // for persistent login sessions

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'server is running with success !!',
  })
})

const server = http.createServer(app)

// define a route handler for the default home page
routes.init(app)

server.listen(port, () => {
  console.log(process.env.DB_PATH, "here")
  console.log(process.env.JWTSECRET, "here")
  console.log(process.env.PORT, "here")
  ConectDB(process.env.DB_PATH || '')
    .then(() => {
      console.log('Db connected successfully')
    })
    .catch((error: any) => {
      console.log('Server run was success but database connection failed')
      console.log(error, 'db connection error')
    })
})
