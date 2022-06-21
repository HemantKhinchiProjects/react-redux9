import {Add_to_cart} from '../constants';
const CardItems = (initialState, action)=>{
  const initialState = {
    cardData:[]
  };
  
  switch(action.type){
    case "Add_to_cart":
      return{
        ...StaticRange,
        cardData:action.data
      }
      break;
      default:return initialState
  }


export default CardItems;