import React, { Component, Fragment, useState,useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { savescore } from "../../actions/das";
import PropTypes from "prop-types";


const PredictedPersonality = ({personalitypred}) => {
    useEffect(() => {
        const pred =localStorage.getItem('personalitypred')
    })
    // React.memo(Component,(prevProps,nextProps)=>localStorage.getItem('personalitypred'))
   
    return (
        <Fragment>
            <div><h1>{pred?pred:""}</h1></div>
        </Fragment>
    )
}

PredictedPersonality.propTypes = {
    personalitypred: PropTypes.string
}

const mapStateToProps = (state) => ({
    personalitypred:state.personality.personalitypred
  });
export default connect(mapStateToProps, {})(PredictedPersonality) 


 
  
