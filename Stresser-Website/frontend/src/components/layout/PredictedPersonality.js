import React, { Component, Fragment, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { savescore } from "../../actions/das";
import PropTypes from "prop-types";


const PredictedPersonality = ({ personalitypred }) => {
   
        const pred =localStorage.getItem('personalitypred')
    
    // React.memo(Component,(prevProps,nextProps)=>localStorage.getItem('personalitypred'))

    return (
        <Fragment>
            <div id="prediction"  className="prediction_Class">
                
               {pred? <img  className="ID10_Class" src={`/static/frontend/img/${pred}.png`} />:""}
                    <div  className="cluster">
                        <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore </span>
                    </div>
                    <div  className="clusterinfo">
                        <span>Cluster : {pred} </span>
                    </div>
            </div>
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




