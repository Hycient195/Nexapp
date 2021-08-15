import { Container, Grid, Typography, Card, CardMedia, CardContent, CardActions, Button, CardHeader, Paper } from '@material-ui/core'
import { red } from '@material-ui/core/colors';
import pic from '../../../images/v640-peipei-16-modernbg.jpg'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { removeItemFromCart } from '../../../actions/userActions'
import { useDispatch } from 'react-redux'
import { useState  } from 'react'
import { useHistory } from 'react-router-dom'
import './itemCard.css'


const ItemCard = ({ seller, itemPrice, itemName, itemDetails, itemId, itemImage, itemIndex, userId }) => {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleRemoveItem = () =>{
        console.log(userId, itemIndex)
        dispatch(removeItemFromCart(itemIndex, userId))
        setTimeout(()=>{
            history.go('/chechout')
        },50)
    }

    return ( 
            <Card>
               
                <CardMedia 
                    component='img'
                    className='pic'
                    image={itemImage}
                    title={itemDetails}
                />
                <CardContent>
                <Typography align="left" color='secondary' variant=''>{seller}</Typography><br/>
                <Typography noWrap color='textSecondary'>{itemName}</Typography><br/>
                <Typography  >{itemPrice}<DeleteOutlinedIcon onClick={handleRemoveItem} className="delete"/></Typography>
                {/* <Button className='cart' onClick={addItemToCart} variant=''><ShoppingCartOutlinedIcon className="cart"/></Button> */}
                </CardContent>

            </Card>
            
     );
}
 
export default ItemCard;