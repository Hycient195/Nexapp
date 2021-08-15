import { Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import FileBase from 'react-file-base64'
import { useState } from 'react';
import { addNewProduct} from '../../actions/productActions'
import { useHistory } from 'react-router-dom'
import './addProduct.css'

const AddProduct = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [itemName, setItemName] = useState()
    const [itemPrice, setItemPrice] = useState()
    const [itemQuantity, setItemQuantity] = useState()
    const [seller, setSeller] = useState()
    const [itemDescription, setItemDescription] = useState()
    const [itemImage, setItemImage] = useState()

    const newProduct = {
        itemName, itemPrice, itemQuantity, seller, itemDescription, itemImage
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        history.push('/')
        dispatch(addNewProduct(newProduct))
    }
    return ( 
        <Grid container className="container">
            <Grid item xs={12} sm={10} md={8} lg={6} xl={5}>
                <Paper className='pape'>
                    <Typography variant="h4" gutterBottom align="center">Add New Product</Typography>
                <form onSubmit={handleSubmit}>

                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <TextField
                            variant="outlined"
                            fullWidth
                            label="Item Name"
                            required
                            color="secondary"
                            onChange={(e)=>setItemName(e.target.value)}
                        />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                            variant="outlined"
                            fullWidth
                            label="item Price"
                            type="number"
                            required
                            color="secondary"
                            onChange={(e)=>setItemPrice(e.target.value)}
                        />
                        </Grid>

                    </Grid>
                    <br/>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField
                            variant="outlined"
                            fullWidth
                            label="Item Quantity"
                            required
                            type='number'
                            color="secondary"
                            onChange={(e)=>setItemQuantity(e.target.value)}
                        /> 
                        </Grid>

                        <Grid item xs={8}>
                            <TextField
                            variant="outlined"
                            fullWidth
                            label="Seller"
                            required
                            color="secondary"
                            onChange={(e)=>setSeller(e.target.value)}
                        /> 
                        </Grid>
                    </Grid>                                    
                    <br/>
                    <TextField
                        variant="outlined"
                        fullWidth
                        label="itemDescription"
                        multiline
                        rows={4}
                        required
                        color="secondary"
                        onChange={(e)=>setItemDescription(e.target.value)}
                    />           
                    <br/><br/>    
                    <FileBase 
                        type='file'
                        multiple={false}
                        onDone={({base64})=>setItemImage(base64)}
                    />
                    <br/><br/>
                    <Button fullWidth type="submit" color="secondary" variant='contained' >Add</Button>
                </form>
                </Paper>
            </Grid>
        </Grid>
     );
}
 
export default AddProduct;