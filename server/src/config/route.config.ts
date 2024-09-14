import JWTPassport from "passport-jwt";
// import UserModel from "../models/User/index";

// Extract necessary methods from passport-jwt module
const JWTStratergy = JWTPassport.Strategy;
const ExtractJWT = JWTPassport.ExtractJwt;

// Define options for JWT strategy
const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWTSECRET || " ",
};

// Export a function that initializes and configures the JWT strategy for Passport
export default (passport: any) => {
  passport.use(
    new JWTStratergy(options, async (jwt_payload: any, done: any) => {
      try {
        // const user = await UserModel.findById(jwt_payload.user);
        // if (!user) return done(null, false);

        // If user exists, authentication succeeds and user information is passed to the next middleware
        // return done(null, user);
        return done(null);
      } catch (error) {
        throw new Error();
      }
    })
  );
};
