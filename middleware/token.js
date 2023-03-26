const jwt = require('jsonwebtoken');

const generateToken = (email) => {
    const token = jwt.sign({ email: email, }, process.env.JWT_TOKEN);

    return token
}
const validateToken = (req, res, next) => {
    const token = req.header.token;
    if (!token) {
        return res.status(401).json({
            message: "token rale em cheyala"
        })
    }
    try {
        const decodedJWT = jwt.verify(token, process.env.JWT_TOKEN);
        req.user = decodedJWT;
    }
    catch (err) {
        return res.status(401).json({
            message: "tappu ra ayya"
        })
    }
    next();

}
module.exports = { generateToken, validateToken };