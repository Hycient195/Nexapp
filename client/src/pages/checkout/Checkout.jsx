import { Container, Grid, CircularProgress, Button } from '@material-ui/core'
import { useEffect, useState } from 'react'
import ItemCard from './itemCard/ItemCard'
import './checkout.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserCart, proceedToPayment } from '../../actions/userActions'
import _ from 'lodash'

const Checkout = () => {
    const dispatch = useDispatch()

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const userId = {
        userId : user.result._id
    }

    useEffect(()=>{
        dispatch(fetchUserCart(userId))
    }, [dispatch])

    const userCart = useSelector((result)=> result.userReducer.result)
  
    let sumPrice

    const prices = userCart?.map((items, index)=>(
            items.itemPrice
        ))
        sumPrice = _.sum(prices)

    const checkoutRequest = {
        tx_ref: `nexapp${Math.random()}`,
        amount: sumPrice,
        currency:"NGN",
        redirect_url:"https://www.google.com/",
        payment_options:"card",
        customer:{
           "email": user.result.email,
           "phonenumber": user.result.phonenumber,
           "name": `${user.result.firstName} ${user.result.lastName}`
        },
        "customizations":{
           "title":"Processing Payment",
           "description":"Note that ther is no refunds after payment has been mase",
           "logo":"https://assets.piedpiper.com/logo.png"
        }
     }

    const handlePayment = () =>{
        
        // dispatch(proceedToPayment(checkoutRequest))   
        alert(JSON.stringify(checkoutRequest))

    }
    console.log(userCart)



    return ( 
        <Container className='container'>
            
        <Grid  container spacing={1}>

        {
            !userCart && (
                <CircularProgress color="secondary" className="loading"/>
            )
        }
            
        {
            userCart && (
                    userCart.map((product, index) => (
                    <Grid item xs={4} md={3} lg={3} key={index}>
                    <ItemCard
                        seller={product.seller} 
                        itemPrice={product.itemPrice} 
                        itemName={product.itemName}  
                        itemDetails={product.itemDetails}
                        itemId={product._id}
                        itemImage={product.itemImage}
                        itemIndex={index}
                        userId={userId}
                    />
                </Grid>  
                ))
            ) 
        }
        </Grid>
        <br/>
        <Button color="secondary" variant='contained' onClick={handlePayment} >Purchase</Button>
        </Container>
     );
}
 
export default Checkout;