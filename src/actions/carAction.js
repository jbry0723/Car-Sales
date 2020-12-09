import {dispatch} from "redux"
export const ADD_FEATURE="ADD_FEATURE"
export const SUBTRACT_FEATURE="SUBTRACT_FEATURE"

export const addFeature= (feature,featureArray)=>{
const addToArray=[...featureArray,feature]

return {type:"ADD_FEATURE", payload: addToArray}
}

export const subtractFeature=(feature,featureArray)=>{
const subtractFromArray=featureArray.filter(item=>item!==feature)
subtractPrice(subtractFromArray)
return {type:"SUBTRACT_FEATURE",payload:subtractFromArray}
}

const subtractPrice=(featureArray)=>dispatch=>{
    console.log("test!")
    let newPrice=0
    for(let i=0; i<featureArray.length;i++){
    let featurePrice=featureArray[i].price
    newPrice=newPrice+featurePrice
    console.log('loop ', i)
    }
    return {type:"SUBTRACT_PRICE", payload:newPrice}
}





