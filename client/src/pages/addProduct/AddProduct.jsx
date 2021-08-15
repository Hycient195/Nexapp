import { Button, Container, Paper, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import FileBase from 'react-file-base64'
import { useState } from 'react';
import { addNewProduct} from '../../actions/productActions'

const AddProduct = () => {
    const dispatch = useDispatch()

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
        dispatch(addNewProduct(newProduct))
    }
    return ( 
        <Container className="container">
            <Paper className='paper'>
            <form onSubmit={handleSubmit}>
            <TextField
                        variant="outlined"
                        fullWidth
                        label="Item Name"
                        required
                        color="secondary"
                        onChange={(e)=>setItemName(e.target.value)}
                    />
                    <br/><br/>
                    <TextField
                        variant="outlined"
                        fullWidth
                        label="item Price"
                        type="number"
                        required
                        color="secondary"
                        onChange={(e)=>setItemPrice(e.target.value)}
                    />
                    <br/><br/>
                     <TextField
                        variant="outlined"
                        fullWidth
                        label="Item Quantity"
                        required
                        type='number'
                        color="secondary"
                        onChange={(e)=>setItemQuantity(e.target.value)}
                    /> 
                    <br/><br/>
                     <TextField
                        variant="outlined"
                        fullWidth
                        label="Seller"
                        required
                        color="secondary"
                        onChange={(e)=>setSeller(e.target.value)}
                    /> 
                    <br/><br/>
                      <TextField
                        variant="outlined"
                        fullWidth
                        label="itemDescription"
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
                 <Button type="submit" size="large" variant='contained' >Add</Button>
            </form>
            </Paper>
            
        </Container>
     );
}
 
export default AddProduct;