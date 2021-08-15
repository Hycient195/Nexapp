import { FormControl, Container, TextField, Button } from "@material-ui/core"
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
        <Container className={classes.container}>

            <div>
                {JSON.stringify({user})}
            </div>
            
            <form onSubmit={handleSubmit}>
                {/* <FormControl> */}
                    <TextField
                        variant="outlined"
                        fullWidth
                        label="First Name"
                        required
                        color="secondary"
                        onChange={(e)=>setFirstName(e.target.value)}
                    />

                    <TextField
                        variant="outlined"
                        fullWidth
                        label="Last Name"
                        required
                        color="secondary"
                        onChange={(e)=>setLastName(e.target.value)}
                    />

                     <TextField
                        variant="outlined"
                        fullWidth
                        label="Phone Number"
                        required
                        type='number'
                        color="secondary"
                        onChange={(e)=>setPhoneNumber(e.target.value)}
                    /> 

                     <TextField
                        variant="outlined"
                        fullWidth
                        label="Email"
                        required
                        color="secondary"
                        onChange={(e)=>setEmail(e.target.value)}
                    /> 
                     <TextField
                        variant="outlined"
                        fullWidth
                        label="Password"
                        type='password'
                        required
                        color="secondary"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        fullWidth
                        label="Confirm Password"
                        type='password'
                        required
                        color="secondary"
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                {/* </FormControl> */}

                <Button variant="outlined" color="textPrimary" type="submit">
                    Submit
                </Button>
            </form>
        </Container>
    )
}

export default Signup