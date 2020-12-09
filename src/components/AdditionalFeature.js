import React from 'react';
import {connect} from "react-redux"
import {addFeature} from "../actions/carAction"

const AdditionalFeature = props => {

const handleClick = e => {
  e.preventDefault();
  props.addFeature(props.feature, props.car.features)
  
  
};
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick}  className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
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

export default connect(mapStateToProps, {addFeature})(AdditionalFeature)