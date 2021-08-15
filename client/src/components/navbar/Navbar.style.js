import { makeStyles } from '@material-ui/core'
import { red } from '@material-ui/core/colors'


const useStyles = makeStyles({
    appBar : {
        paddingTop : 5,
        height : 60,
        background : 'red'
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
    nav : {
        marginTop : 90,
        position: 'absolute',
        width: "100%",
        height: 80,
        left: -1,
        top: -31,
        background: 'silver',
    },
    buttonGroup : {
        marginTop : 100,
        overflowX : 'scroll'
    }, 
    button : {
        fontSize : 9
    },
    ul : {
        height : '80%',
        marginTop : 80,

        // overflowX : 'scroll',
        // listStyle : 'none',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        borderBottom : '1px solid red',
        borderRadius : 0
        // bottom : 100
    },
    li : {
        // bottom : 0,
        height : '100%',
        display : 'inline',
        borderBottom : '2px solid red',
        marginBottom : 0
    },
    a : {
        // display: 'inline',
        color: 'white',
        // textAlign: 'center',
        padding: 70,
        // background : 'green',
        textDecoration: 'none',
    },
    userDetails : {
        float : 'right'
    },
    grid : {
        textAlign : 'center',
        float : 'center'
    }
})

export default useStyles