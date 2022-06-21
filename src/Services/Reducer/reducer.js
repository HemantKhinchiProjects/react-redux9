const initialState = {
  cardData:[]
}
const CardItems = (initialState.action)=>{
  switch(action.type){
    case "Add_to_cart":
      return{
        ...StaticRange,
        cardData:action.data
      }
  }


export default CardItems;