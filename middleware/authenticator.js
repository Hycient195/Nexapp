import jwt from 'jsonwebtoken'

const authenticator = async (req, res, next) =>{

    try {
        
        const token = req.headers.authorization.split(" ")[1];
        const isCustomToken = token.length < 500

        let decodedData;
        console.log(decodedData)

        if (token && isCustomToken) {
            decodedData = jwt.verify(token, process.env.JWT_SECRET)

            req.userId = decodedData?.id
        } else {
            decodedData = jwt.decode(token)

            req.userId = decodedData?.sub
        }
        next()
    } catch (error) {
        console.log(error)
        res.status(401)
        res.json({message : 'Incorrect user credentials'})
    }
   
}

export default authenticator