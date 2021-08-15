import  {FETCH_PRODUCTS, CREATE, DELETE, UPDATE, LIKE, SIGNUP, ADD_TO_CART} from '../actionTypes/actionTypes'


export default (state = [], action) =>{

    switch(action.type){
        case  FETCH_PRODUCTS:
            return action?.payload
            
        case CREATE:
            return [...state, action.payload]

        case ADD_TO_CART : 
            return action.payload
        default : 
            return state
    }
}
