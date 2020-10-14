import React from "react";
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

const questions = [
  [
    ["I am the life of the party.", "EXT", 1],
    // ["I don't talk a lot.", "EXT", 1],
    // ["I feel comfortable around people.","EXT", 1],
    // ["I keep in the background.","EXT", 1],
    // ["I start conversations.","EXT", 1],
    // ["I have little to say.","EXT", 1],
    // ["I talk to a lot of different people at parties.","EXT", 1],
    // ["I don't like to draw attention to myself.","EXT", 1],
    // ["I don't mind being the center of attention.","EXT", 1],
    // ["I am quiet around strangers.","EXT", 1],
  ],
  [
    ["I get stressed out easily.", "EST", 1],
    // ["I am relaxed most of the time.", "EST", 1],
    // ["I worry about things.", "EST", 1],
    // ["I seldom feel blue.", "EST", 1],
    // ["I am easily disturbed.", "EST", 1],
    // ["I get upset easily.", "EST", 1],
    // ["I change my mood a lot.", "EST", 1],
    // ["I have frequent mood swings.", "EST", 1],
    // ["I get irritated easily.", "EST", 1],
    // ["I often feel blue.", "EST", 1],
  ],
  [
    ["I feel little concern for others.", "AGR", 1],
    // ["I am interested in people.", "AGR", 1],
    // ["I insult people.", "AGR", 1],
    // ["I sympathize with others' feelings.", "AGR", 1],
    // ["I am not interested in other people's problems.", "AGR", 1],
    // ["I have a soft heart.", "AGR", 1],
    // ["I am not really interested in others.", "AGR", 1],
    // ["I take time out for others.", "AGR", 1],
    // ["I feel others' emotions.", "AGR", 1],
    // ["I make people feel at ease.", "AGR", 1]
  ],
  [
    ["I am always prepared.", "CSN", 1],
    // ["I leave my belongings around.", "CSN", 1],
    // ["I pay attention to details.", "CSN", 1],
    // ["I make a mess of things.", "CSN", 1],
    // ["I get chores done right away.", "CSN", 1],
    // ["I often forget to put things back in their proper place.", "CSN", 1],
    // ["I like order.", "CSN", 1],
    // ["I shirk my duties.", "CSN", 1],
    // ["I follow a schedule.", "CSN", 1],
    // ["I am exacting in my work.", "CSN", 1],
  ],
  [
    ["I have a rich vocabulary.", "OPN", 1],
    // ["I have difficulty understanding abstract ideas.", "OPN", 1],
    // ["I have a vivid imagination.", "OPN", 1],
    // ["I am not interested in abstract ideas.", "OPN", 1],
    // ["I have excellent ideas.", "OPN", 1],
    // ["I do not have a good imagination.", "OPN", 1],
    // ["I am quick to understand things.", "OPN", 1],
    // ["I use difficult words.", "OPN", 1],
    // ["I spend time reflecting on things.", "OPN", 1],
    // ["I am full of ideas.", "OPN", 1],
  ],
];
let ext = 0;
let opn = 0;
let csn = 0;
let est = 0;
let agr = 0;

const Personality = ({ personalityscore, isAuthenticated, personalitypred, user }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const userScores = {
    EXT: 0,
    EST: 0,
    AGR: 0,
    CSN: 0,
    OPN: 0,
  };
  const onChange = (page, index, value, e) => {
    let i = 0;

    // console.log(questions[page][index][1]);
    // console.log(questions[page][index][2]);
    // console.log(value);
    questions[page][index][2] = value;
    if (questions[page][index][1] === "EXT") {
      userScores["EXT"] = 0;

      for (i = 0; i < questions[page].length; i++) {
        if (i % 2 !== 0) {
          userScores["EXT"] -= questions[page][i][2];
        } else {
          userScores["EXT"] += questions[page][i][2];
        }
      }
      userScores["EXT"] += 20;
      //   ext=(userScores["EXT"]*(8 -1))/ 40 + 1;
    } else if (questions[page][index][1] === "OPN") {
      userScores["OPN"] = 0;
      for (i = 0; i < questions[page].length; i++) {
        if (i % 2 !== 0) {
          userScores["OPN"] -= questions[page][i][2];
        } else {
          userScores["OPN"] += questions[page][i][2];
        }
      }
      userScores["OPN"] += 8;
    } else if (questions[page][index][1] === "CSN") {
      for (i = 0; i < questions[page].length; i++) {
        userScores["CSN"] = 0;
        if (i % 2 !== 0) {
          userScores["CSN"] -= questions[page][i][2];
        } else {
          userScores["CSN"] += questions[page][i][2];
        }
      }
      userScores["CSN"] += 14;
    } else if (questions[page][index][1] === "AGR") {
      userScores["AGR"] = 0;
      for (i = 0; i < questions[page].length; i++) {
        if (i % 2 !== 0) {
          userScores["AGR"] += questions[page][i][2];
        } else {
          userScores["AGR"] -= questions[page][i][2];
        }
      }
      userScores["AGR"] += 14;
    } else if (questions[page][index][1] === "EST") {
      userScores["EST"] = 0;
      for (i = 0; i < questions[page].length; i++) {
        if (i % 2 !== 0) {
          userScores["EST"] += questions[page][i][2];
        } else {
          userScores["EST"] -= questions[page][i][2];
        }
      }
      userScores["EST"] += 38;
    }

    console.log(userScores);
  };
  // let ext=(userScores["EXT"]*(8 -1))/ 40 + 1;
  // let opn=(userScores["OPN"]*(8 -1))/ 40 + 1;
  // let agr=(userScores["AGR"]*(8 -1))/ 40 + 1;
  // let csn=(userScores["CSN"]*(8 -1))/ 40 + 1;
  // let est=(userScores["EST"]*(8 -1))/ 40 + 1;
  // console.log(ext);

  const Submit = () => {
    // if(!isAuthenticated){
    //     return setAlert("You need to authenticate prior to take the test","danger")
    // }
    opn = (userScores["OPN"] * (8 - 1)) / 40 + 1;
    opn = parseInt(opn);
    console.log(opn);
     ext=parseInt((userScores["EXT"]*(8 -1))/ 40 + 1);
     agr=parseInt((userScores["AGR"]*(8 -1))/ 40 + 1);
     csn=parseInt((userScores["CSN"]*(8 -1))/ 40 + 1);
     est=parseInt((userScores["EST"]*(8 -1))/ 40 + 1);
     console.log(csn)
     console.log(ext)
     console.log(est)
     console.log(agr)
    return personalityscore("Male", 25, opn, csn, agr, ext, est);
  };

  if(personalitypred !== ""){
    console.log("hiii");
    return <Redirect to="/predictedpersonality" />;
  }
  

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
                    value="1"
                    
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
                    value="1"
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
                    value="3"
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
                    value="1"
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
                    value="5"
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

      <div className="next-prev" style={{ width: "20%" }}>
        <div className="col-6">
          <button
            className="appo-button"
            onClick={Submit}
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
