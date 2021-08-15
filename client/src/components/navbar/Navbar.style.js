import { makeStyles } from '@material-ui/core'
import { red } from '@material-ui/core/colors'


const useStyles = makeStyles({
    appBar : {
        paddingTop : 5,
        height : 60,
        background : '#ED3137',
    }, 
    search : {
        marginTop : 0,
        width : '90%',
        borderRadius : 50,
        fontSize : 'large',
        // height : 30,
        border : 0,
        padding : 10
    }, 
    form : {
        textAlign : 'center',
        float : 'center'
    },
   
    buttonGroup : {
        marginTop : 100,
        overflowX : 'scroll'
    }, 
    button : {
        fontSize : 9
    },
   
    userDetails : {
        float : 'right',
        // padding: 10,
        textAlign : 'center',
        background : 'pink',
        borderRadius : 5
        // borderTopRightRadius : '40%',
        // borderTopLeftRadius : '40%',
    },
    grid : {
        textAlign : 'center',
        float : 'center',
        // background : 'green',
        // height : 10
    }
})

export default useStyles