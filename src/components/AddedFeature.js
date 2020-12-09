import React from 'react';
import {subtractFeature} from "../actions/carAction"
import {connect} from "react-redux"
const AddedFeature = props => {
 

  const handleClick = e => {
    e.preventDefault();
    props.subtractFeature(props.feature, props.car.features)
}
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleClick} className="button">X</button>
      
      {props.feature.name}
    </li>
  );
};



const mapStateToProps=state=> {
  return{
  car:state.car,
  additionalFeatures:state.additionalFeatures,
  additionalPrice:state.additionalPrice
  }
}

export default connect(mapStateToProps,{subtractFeature} )(AddedFeature)
