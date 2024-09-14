import { Request, Response, NextFunction, Express } from 'express'

// import { authCheckMiddleware } from "./middlewares";

import apiRoutes from './api'

function init(server: Express) {
  server.get('*', function (req: Request, res: Response, next: NextFunction) {
    console.log('Request was made to: ' + req.originalUrl)
    console.log('response', res.getHeaders())
    return next()
  })

  // console.log("apiRoute", apiRoute);
  server.use('/api', apiRoutes)
}

export default { init: init }
