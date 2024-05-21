const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../src/secret");


const authMiddleware = (req, res, next) => {
  try {
    
    const {authorization} = req.headers;
    // console.log(authorization)
    const token = authorization.split(" ")[1];
    const decryptedToken = jwt.verify(token, jwt_secret);
    req.eid = decryptedToken.eid;

    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = authMiddleware;