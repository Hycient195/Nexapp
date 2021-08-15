import jwt from 'jsonwebtoken'

const tokenGenerator = (id) =>{
    const token = jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn : '3d'
    })
    return token
}
export default tokenGenerator