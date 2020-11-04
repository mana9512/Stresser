import React, { Component, Fragment, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { savescore } from "../../actions/das";
import PropTypes from "prop-types";


const PredictedPersonality = ({ personalitypred }) => {

        const pred =localStorage.getItem('personalitypred')
        let text = display();

        function display(){
        text = "";
        if(pred!=null){
            if(pred == 1){
                text = "An immediate trait sees an extreme competitive personality due to a 0pt. on openness. Other values showcase a 1 pt., for the rest 4 factors, depicting a sociable,creative and mood-affected personality. This a more competitive personality oriented trend portrayal apart from the above stated."
            } 
            else if(pred == 2){
                text = " A maximum of agreeableness and nil of creative outlook and extroversion. This graph can be a feature-showing personality lacking average out of the box thinking with also an average of mood affected factor."
            }
            else if(pred == 3){
                text = "A view to this 5-point personality marker graph shows an emphasis to a socialistic personality. However, there is major a lack of out of the box and creative thinking as the openness factor shows a 0 pt. mark on the graph. "
            }
            else if(pred == 4){
                text = "An eye for details and extrovert behaviour with the a mood-affected personality can be inferred in this instance of graph. This personality head lacks the liking towards changes or an upvote for new ideas as openness factor is bounded to 0pts. This is not a contradicting personality but a more stress/anxiety oriented personality, perhaps due to socialite nature. "
            }
            else if(pred == 5){
                text = " A little less to a -very- helping hand personality with even lesser degree of extrovert nature. Personality has an observable degree of seeking-for-new-ideas factor but anxiety or stress or mood-swings may be major trait to be observed in this 5-factor personality graph."
            }
            else if(pred == 6){
                text = " An average score of agreeableness factor this personality shall see a dramatic shifting. With a high score of thinking creatively and imagination it also is personality who has a schedule made an work in accordance to it. However the levels of conscientiousness can be considered contradictory to the high in Neuroticism."
            }
            else if(pred == 7){
                text = "The high trend portrayed by the conscientiousness and neuroticism can be considered as emphasising factors for this personality type. This personality shall habitually belittle other people or insult them. To note that this personality is sociable and can think differently for a new or creative outcome."
            }
            else if(pred == 8){
                text = "The emphasis for this personality can be seen majorly from the stress or worrisome which can be an apparent visual. Though empathy is a defining factor one can see an averaged social and an eye-for-details behaviour, which can be indicative of a normal personality affected by mood."
            }
            else if(pred == 9){
                text = "A true altruist with a heart for all. There might be an often sighting of rapidly mood changing behaviour as they also have normal thought process and stubbornness towards any changes. A nearby behaviour but not an introvert as this personality does not fear interactions, however it also does not like much of it."
            }
            else if(pred == 10){
                text = "A holistic trait outcome for this 5-factor personality graph depicts an almost similar trend in agreeableness and neuroticism. Thus, a less competitive,  more mood and cooperative personality is observed. The openness, conscientiousness and extroversion lie between 0.6(Openness) to a little less to 0.5(extroversion). The overall picture is clearer of a balanced overall personality trait."
            }
        }
        return text;
    };
    
    // React.memo(Component,(prevProps,nextProps)=>localStorage.getItem('personalitypred'))

    return (
        <Fragment>
            <div id="prediction"  className="prediction_Class">
                
               {pred? <img  className="ID10_Class" src={`/static/frontend/img/${pred}.png`} />:""}
                    <div  className="cluster">
                        <span>{text}</span>
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




