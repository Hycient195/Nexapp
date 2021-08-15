import { Container, Button, ButtonGroup, AppBar, Typography, TextField, Menu, MenuItem, Toolbar, Avatar, Grid } from '@material-ui/core'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import useStyles from './Navbar.style'
import { logout } from '../../actions/userActions'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom'


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
    
    <Container >
      <AppBar className={classes.appBar} >
          <Typography className='' variant="h6" align="center">NEXAPP <LocalMallIcon/> </Typography>
      {/* <img src="" height="" alt=""/> */}

        {/* <Toolbar> */}
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
         

        

        {/* </Toolbar> */}
    

        
      </AppBar>
      <ButtonGroup className={classes.ul } variant='text'>
        <Button>For you</Button>
        <Button>Trending</Button>
        <Button>Categories</Button>
        {/* <Button>Easy Access</Button>
        <Button>Specials</Button> */}
      </ButtonGroup>

      {
        user ? (
          <>
            <Button onClick={handleLogout} variant="contained">Logout</Button>
            <Link to='/checkout'><Button variant='contained'>Checkout</Button></Link>
          </>
          
        ) : (
          <Link to='/login'><Button variant='contained'>Login</Button></Link>
        )
      }

    </Container>
  )
}

export default Navbar