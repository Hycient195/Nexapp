import { Container, Grid } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useEffect, useState } from 'react';
import useStyles from './Home.style.js'
import ItemCard from './itemCard/ItemCard.jsx';
import { fetchProducts } from '../../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'



const Posts = () =>{

    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    const products = useSelector((state)=> state.productReducer)
    console.log(products)

    return(
        <Grid className={classes.container} container spacing={1}>
            {products ? (
                 products.map((product)=>(
                
                    <Grid item xs={6} md={4} lg={3} key={product._id}>
                        <ItemCard
                            seller={product.seller} 
                            itemPrice={product.itemPrice} 
                            itemName={product.itemName}  
                            itemDetails={product.itemDetails}
                            itemId={product._id}
                            itemImage={product.itemImage}
                        />
                    </Grid>                    
                ))
            ) : (
                <div>No Product avaliable</div>
            )
        }
        </Grid>
           
    )
}

export default Posts