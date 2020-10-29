import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { personalityscore } from "../../actions/personality";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));



const Personality = ({ personalityscore, isAuthenticated, personalitypred, user }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [selected, setSelected] = React.useState();
  const [questions,setQuestions] = useState([
    [
      ["I am the life of the party.", "EXT", 1,undefined],
      ["I don't talk a lot.", "EXT", 1,undefined],
      ["I feel comfortable around people.","EXT", 1,undefined],
      // ["I keep in the background.","EXT", 1,undefined],
      // ["I start conversations.","EXT", 1,undefined],
      // ["I have little to say.","EXT", 1,undefined],
      // ["I talk to a lot of different people at parties.","EXT", 1,undefined],
      // ["I don't like to draw attention to myself.","EXT", 1,undefined],
      // ["I don't mind being the center of attention.","EXT", 1,undefined],
      // ["I am quiet around strangers.","EXT", 1,undefined],
    ],
    [
      ["I get stressed out easily.", "EST", 1,undefined],
      ["I am relaxed most of the time.", "EST", 1,undefined],
      ["I worry about things.", "EST", 1,undefined],
      // ["I seldom feel blue.", "EST", 1,undefined],
      // ["I am easily disturbed.", "EST", 1,undefined],
      // ["I get upset easily.", "EST", 1,undefined],
      // ["I change my mood a lot.", "EST", 1,undefined],
      // ["I have frequent mood swings.", "EST", 1,undefined],
      // ["I get irritated easily.", "EST", 1,undefined],
      // ["I often feel blue.", "EST", 1,undefined],
    ],
    [
      ["I feel little concern for others.", "AGR", ,undefined],
      // ["I am interested in people.", "AGR", 1,undefined],
      // ["I insult people.", "AGR", 1,undefined],
      // ["I sympathize with others' feelings.", "AGR", 1,undefined],
      // ["I am not interested in other people's problems.", "AGR", 1,undefined],
      // ["I have a soft heart.", "AGR", 1,undefined],
      // ["I am not really interested in others.", "AGR", 1,undefined],
      // ["I take time out for others.", "AGR", 1,undefined],
      // ["I feel others' emotions.", "AGR", 1,undefined],
      // ["I make people feel at ease.", "AGR", 1,undefined]
    ],
    [
      ["I am always prepared.", "CSN", 1,undefined],
      // ["I leave my belongings around.", "CSN", 1,undefined],
      // ["I pay attention to details.", "CSN", 1,undefined],
      // ["I make a mess of things.", "CSN", 1,undefined],
      // ["I get chores done right away.", "CSN", 1,undefined],
      // ["I often forget to put things back in their proper place.", "CSN", 1,undefined],
      // ["I like order.", "CSN", 1,undefined],
      // ["I shirk my duties.", "CSN", 1,undefined],
      // ["I follow a schedule.", "CSN", 1,undefined],
      // ["I am exacting in my work.", "CSN", 1,undefined],
    ],
    [
      ["I have a rich vocabulary.", "OPN", 1,undefined],
      // ["I have difficulty understanding abstract ideas.", "OPN", 1,undefined],
      // ["I have a vivid imagination.", "OPN", 1,undefined],
      // ["I am not interested in abstract ideas.", "OPN", 1,undefined],
      // ["I have excellent ideas.", "OPN", 1,undefined],
      // ["I do not have a good imagination.", "OPN", 1,undefined],
      // ["I am quick to understand things.", "OPN", 1,undefined],
      // ["I use difficult words.", "OPN", 1,undefined],
      // ["I spend time reflecting on things.", "OPN", 1,undefined],
      // ["I am full of ideas.", "OPN", 1,undefined],
    ],
  ])
 
  

  const onChange = (page, index, value, e) => {
    e.preventDefault();
    let i = 0;
    for (i = 0; i < questions[page].length; i++) {
      questions[page][i][3]=value
      setQuestions(questions);
      setSelected(value);
    }
    
  
  };
  

  const Submit = (e) => {
    // if(!isAuthenticated){
    //     return setAlert("You need to authenticate prior to take the test","danger")
    // }
    e.preventDefault();
    
     return personalityscore(questions[2][0][3], questions[2][9][3], questions[2][1][3], questions[2][2][3], questions[2][3][3], questions[2][4][3], questions[2][5][3],questions[2][6][3],questions[2][7][3],questions[2][8][3],
      questions[3][0][3], questions[3][9][3], questions[3][1][3], questions[3][2][3], questions[3][3][3], questions[3][4][3], questions[3][5][3],questions[3][6][3],questions[3][7][3],questions[3][8][3],
      questions[1][0][3], questions[1][9][3], questions[1][1][3], questions[1][2][3], questions[1][3][3], questions[1][4][3], questions[1][5][3],questions[1][6][3],questions[1][7][3],questions[1][8][3],
      questions[3][0][3], questions[3][9][3], questions[3][1][3], questions[0][2][3], questions[0][3][3], questions[0][4][3], questions[0][5][3],questions[0][6][3],questions[0][7][3],questions[0][8][3],
      questions[4][0][3], questions[4][9][3], questions[4][1][3], questions[4][2][3], questions[4][3][3], questions[4][4][3], questions[4][5][3],questions[4][6][3],questions[4][7][3],questions[4][8][3],);
  };

  // if(personalitypred !== ""){
  //   console.log("hiii");
  //   return <Redirect to="/predictedpersonality" />;
  // }
  

  return (
    
    <div className={classes.root}>
      <div className="quesBlock">
        <div
          className="container"
          style={{ width: "100%", margin: "auto", marginBottom: "20px" }}
        >
          {questions[page - 1].map((val, i) => {
            return (
              <div key={i+"_"+page}>
                <div className="col-12">
                  <h2>
                    Question {i + 1 + 10 * (page - 1)} . {val[0]}
                  </h2>
                </div>
                <br />
                <div className="col-7">
                  <input
                    type="radio"
                    name={"option" + i}
                    id={i+"_"+page + "_0"}
                    
                    value={1} 
                    checked={questions[page - 1][i][3] == 1}
                    onChange={(e) => onChange(page - 1, i, 1, e)}
                  />
                  <label htmlFor={i +"_"+page + "_0"}>DISAGREE</label>
                  <div className="check"></div>
                </div>
                <br />
                <br />
                <div className="col-7">
                  <input
                    type="radio"
                    name={"option" + i}
                    id={i +"_"+page +"_1"}
                 
                    value={2} 
                    checked={questions[page - 1][i][3] == 2}
                    onChange={(e) => onChange(page - 1, i, 2, e)}
                  />
                  <label htmlFor={i +"_"+page + "_1"}>SLIGHTLY DISAGREE</label>
                  <div className="check"></div>
                </div>
                <br />
                <br />
                <div className="col-7">
                  <input
                    type="radio"
                    name={"option" + i}
                    id={i +"_"+page + "_2"}
                    value={3} 
                    checked={questions[page - 1][i][3] == 3}
                    onChange={(e) => onChange(page - 1, i, 3, e)}
                  />
                  <label htmlFor={i +"_"+ page +"_2"}>NEUTRAL</label>
                  <div className="check"></div>
                </div>
                <br /> 
                <br />
                <div className="col-7">
                  <input
                    type="radio"
                    name={"option" + i}
                    id={i +"_"+ page +"_3"}
                    value={4} 
                    checked={questions[page - 1][i][3] ==4 }
                    onChange={(e) => onChange(page - 1, i, 4, e)}
                  />
                  <label htmlFor={i +"_"+page + "_3"}>SLIGHTLY AGREE</label>
                  <div className="check"></div>
                </div>
                <br />
                <br />
                <div className="col-7">
                  <input
                    type="radio"
                    name={"option" + i}
                    id={i +"_"+page + "_4"}
                    value={5} 
                    checked={questions[page - 1][i][3] == 5}
                    onChange={(e) => onChange(page - 1, i, 5, e)}
                  />
                  <label htmlFor={i +"_"+page + "_4"}>AGREE</label>
                  <div className="check"></div>
                </div>
                <br />
                <br />
              </div>
            );
          })}
        </div>
      </div>
      <Typography>Page: {page}</Typography>

      {/* onSubmit={(e) => onSubmit(e)} */}

      <div className="next-prev" style={{ width: "20%" }}>
        <div className="col-6">
          <button
            className="appo-button"
            onClick={(e) => Submit(e)}
            style={{ marginLeft: "1065px", fontSize: "16px" }}
            disabled={page !== 5}
          >
            Finish
          </button>
        </div>
      </div>
      <Pagination count={5} page={page} onChange={handleChange} />
    </div>
  );
};

Personality.propTypes = {
  personalityscore: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  personalitypred: PropTypes.string
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  personalitypred:state.personality.personalitypred
});

export default connect(mapStateToProps, { personalityscore })(Personality);
