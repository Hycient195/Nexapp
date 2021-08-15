import { Container, Button, ButtonGroup, AppBar, Typography, TextField, Menu, MenuItem, Toolbar, Avatar, Grid, Box } from '@material-ui/core'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import useStyles from './Navbar.style'
import { logout } from '../../actions/userActions'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import './navbar.css'


const Navbar = () =>{

  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const [gridValue, setGridValue] = useState(12)

  const handleLogout = (e)=>{
    e.preventDefault()
    history.go('/')
    dispatch(logout(history))
  }

  const user = JSON.parse(localStorage.getItem('profile'))

  

  useEffect(()=>{
    if(user)setGridValue(10)
  }, [user])


  return(
    
    < >
      <AppBar className={classes.appBar} >
          <Typography className='' variant="h6" align="center">NEXAPP <LocalMallIcon/> </Typography>
      {/* <img src="" height="" alt=""/> */}

        <Container>
          <Grid container>
            <Grid className={classes.grid} item xs={gridValue} sm={gridValue}>
              <form className={classes.form} >
                <label htmlFor="">
                  <input type="text"
                    className={classes.search}
                    placeholder="Search"
                  />
                </label>
              </form>
            </Grid>
            
            {   
              user && 
              <Grid item xs={2} sm={2}>
                <div className={classes.userDetails}>
                  <Avatar src={user.result.firstName[0]}/>
                  <Typography color='primary' variant='body2'>{user.result.firstName}</Typography>
                </div>
              </Grid>
            }
           
          </Grid>
        </Container>
        
      </AppBar>


      
      {/* <br/><br/><br/> */}
      

      <div className="navlink-container">
        <Box component="div" my={2} className="box" overflow="auto">
          <ul className={classes.ul} style={{ width: "300%", whiteSpace: 'nowrap' }}>
          {
            user ? (
              <>
                <li  ><a className='highlighted' onClick={handleLogout}  href="">Logout</a></li>
                <li  ><a className='highlighted'  href="/checkout">Checkout</a></li>
                <li ><a  href="/add_product">Add Product</a></li>
              </>              
            ) : (
              <>
                <li ><a className='highlighted'  href="/login">Login</a></li>
              </>              
            )
          }
        <li ><a  href="">For you</a></li>
        <li ><a  href="">Trending</a></li>
        <li ><a  href="">Categories</a></li>
        <li ><a  href="">Easy Access</a></li>
        <li ><a  href="">Specials</a></li>
        <li ><a  href="">Make something</a></li>
        <li ><a  href=""> The other</a></li>

        <li className={classes.li}><a className={classes.a} href=""></a></li>

          </ul>
        </Box>     
      </div>
      
    </>
  )
}

export default Navbar