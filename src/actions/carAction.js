import {dispatch} from "redux"
export const ADD_FEATURE="ADD_FEATURE"
export const SUBTRACT_FEATURE="SUBTRACT_FEATURE"
export const SUBTRACT_PRICE="SUBTRACT_PRICE"

export const addFeature= (feature,featureArray)=>{
const addToArray=[...featureArray,feature]

return {type:"ADD_FEATURE", payload: addToArray}
}

export const subtractFeature=(feature,featureArray)=>{
const subtractFromArray=featureArray.filter(item=>item!==feature)
return {type:"SUBTRACT_FEATURE",payload:subtractFromArray}
}

export const subtractPrice=(featureprice)=>{
const negPrice=-Math.abs(featureprice)
return {type:"SUBTRACT_PRICE", payload:negPrice}
    
    
}





