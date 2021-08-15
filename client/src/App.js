// import logo from './logo.svg';
import useStyles from './app.style.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AppBar, Typography, Paper, Container} from '@material-ui/core'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup.jsx'
import Footer from './components/footer/Footer.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Login from './pages/login/Login.jsx';
import Checkout from './pages/checkout/Checkout.jsx';
import AddProduct from './pages/addProduct/AddProduct.jsx';

function App() {

  const classes = useStyles()
  

  return (
    <BrowserRouter>

      <Container maxWidth="lg" className=''>

        <AppBar position="fixed" color="textSecondary" className={classes.appBar}>
          {/* <Typography className='' variant="h4" align="left">StoryLyne</Typography>
          <img src="" height="" alt=""/> */}

          <Navbar/>
        </AppBar>

        <Switch>

          <Route exact path="/">
            <Home/>  
          </Route>

          <Route exact path="/signup">
            <Signup/>
          </Route>

          <Route exact path="/login">
            <Login/>
          </Route>

          <Route exact path="/checkout">
            <Checkout/>
          </Route>

          <Route exact path="/add_product">
            <AddProduct/>
          </Route>

        </Switch>

        <Footer/>
      </Container>
      
    </BrowserRouter>
  );
}

export default App;
