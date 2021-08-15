import { FormControl, Container, TextField, Button, Grid, Paper, Typography } from "@material-ui/core"
import useStyles from './Signup.style'


import { signup } from '../../actions/userActions'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useState } from "react"
import { useHistory } from 'react-router-dom'

const Signup = () =>{
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [phoneNumber, setPhoneNumber ] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()


    // const store = useStore()
    // console.log(store.getState().userReducer.data)

    // const select = useSelector((state)=> state.userReducer.data.token)
    // console.log(select)

    const user = {
        firstName, lastName,
        phoneNumber, email, password, confirmPassword
    }

    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        dispatch(signup(user, history))
    }

    return(
        <Grid container className={classes.container}>

            <Grid item xs={12} sm={10} md={8} lg={6} xl={5}>
                <Paper className={classes.paper}>
                    <Typography gutterBottom align='center' variant='h4'>Sign Up</Typography>
                <form onSubmit={handleSubmit}>
                    {/* <FormControl> */}

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            className="names"
                            label="First Name"
                            fullWidth
                            required
                            color="secondary"
                            onChange={(e)=>setFirstName(e.target.value)}
                        />
                        </Grid>
                        
                        <Grid item xs={6}>
                            <TextField
                                variant="outlined"
                                className="names"
                                fullWidth
                                label="Last Name"
                                required
                                color="secondary"
                                onChange={(e)=>setLastName(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <br/>    
                        

                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Phone Number"
                            required
                            type='number'
                            color="secondary"
                            onChange={(e)=>setPhoneNumber(e.target.value)}
                        /> 
                    <br/><br/>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Email"
                            required
                            color="secondary"
                            onChange={(e)=>setEmail(e.target.value)}
                        /> 
                        <br/><br/>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Password"
                            type='password'
                            required
                            color="secondary"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <br/><br/>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Confirm Password"
                            type='password'
                            required
                            color="secondary"
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                        />
                        <br/><br/>
                    {/* </FormControl> */}

                    <Button className={classes.button} fullWidth variant="contained" color="secondary" type="submit">
                        Submit
                    </Button>
                </form>
                </Paper>
            </Grid>

            <Grid item>

            </Grid>
            
            
            
        </Grid>
    )
}

export default Signup