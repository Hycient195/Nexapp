import  {FETCH_USER_CART, SIGNUP, LOGIN, LOGOUT, AUTHENTICATE, REMOVE_ITEM_FROM_CART, PROCEED_TO_PAYMENT} 
        from '../actionTypes/actionTypes'


const userReducer = (state = { authData : null }, action) =>{

    switch(action.type){
        case  AUTHENTICATE:
            console.log('this is from userReducer')
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData : action?.data}
 
        case LOGOUT : 
            localStorage.clear()
        case FETCH_USER_CART : 
            return action.payload
        case REMOVE_ITEM_FROM_CART :
            return action.payload
        case PROCEED_TO_PAYMENT : 
            return action.payload
        default : 
            return state
    }
}

export default userReducer
