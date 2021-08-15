import { Container, Grid, Typography, Card, CardMedia, CardContent, CardActions, Button, CardHeader, Paper } from '@material-ui/core'
import { red } from '@material-ui/core/colors';
import pic from '../../../images/v640-peipei-16-modernbg.jpg'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { addToCart } from '../../../actions/productActions'
import { useDispatch } from 'react-redux'
import { useState  } from 'react'
import './itemCard.css'


const ItemCard = ({ seller, itemPrice, itemName, itemDetails, itemId, itemImage }) => {

    const dispatch = useDispatch()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const id = {
        itemId : itemId,
        userId : user?.result?._id
    }
   
    const addItemToCart = () =>{
        // console.log(id)
        dispatch(addToCart(id))

        setTimeout(() => {
            alert(`${itemName} has been sucessfully added to cart`)
        }, 200);
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
                <Typography variant='' color='textSecondary'>{itemName}</Typography><br/>
                <Typography variant='' >{itemPrice}</Typography>
                {/* <Button className='cart' onClick={addItemToCart} variant=''><ShoppingCartOutlinedIcon className="cart"/></Button> */}
                { id.userId && <ShoppingCartOutlinedIcon onClick={addItemToCart} className="cart"/>}
                </CardContent>

            </Card>
            
     );
}
 
export default ItemCard;