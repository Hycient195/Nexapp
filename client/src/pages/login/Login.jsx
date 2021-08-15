import { Container, Typography, TextField, Button, Paper, Grid } from '@material-ui/core'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { login } from '../../actions/userActions'
import { useHistory } from 'react-router-dom'
import './login.css'

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setEmail ] = useState()
    const [ password, setPassword ] = useState()

    const user = { email, password }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(login(user, history))
        // setTimeout(()=>{
        //     history.push('/')
        // }, 150)

    }

    return ( 
        <Grid container className="container">

            <Grid item xs={12} sm={10}  md={8} lg={6} xl={5}>
               
                <Paper className="pape">
                <Typography gutterBottom align='center' variant="h4">Log In</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Email"
                            required
                            type="email"
                            color="secondary"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <br/> <br/>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Password"
                            required
                            type="password"
                            color="secondary"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <br/><br/>
                        <Button variant="outlined" color='secondary' type="submit">Login</Button>
                    </form>
                    <br/>
                <Typography>Dont have an account?  <a href="/signup">sign up here</a> </Typography>
                </Paper>
            </Grid>     
            
        </Grid>
     );
}
 
export default Login;