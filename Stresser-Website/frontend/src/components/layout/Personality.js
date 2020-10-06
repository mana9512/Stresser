import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


const questions = [
    [
        ["I am the life of the party.", "EXT", 1],
        ["I don't talk a lot.", "EXT", 1],
        // ["I feel comfortable around people."],
        // ["I keep in the background."],
        // ["I start conversations."],
        // ["I have little to say."],
        // ["I talk to a lot of different people at parties."],
        // ["I don't like to draw attention to myself."],
        // ["I don't mind being the center of attention."],
        // ["I am quiet around strangers."],

    ],
    [
        ["I get stressed out easily.", "EST", 1],
        // ["I am relaxed most of the time."],
        // ["I worry about things."],
        // ["I seldom feel blue."],
        // ["I am easily disturbed."],
        // ["I get upset easily."],
        // ["I change my mood a lot."],
        // ["I have frequent mood swings."],
        // ["I get irritated easily."],
        // ["I often feel blue."],


    ],
    [
        ["I feel little concern for others.", "AGR", 1],
        // ["I am interested in people."],
        // ["I insult people."],
        // ["I sympathize with others' feelings."],
        // ["I am not interested in other people's problems."],
        // ["I have a soft heart."],
        // ["I am not really interested in others."],
        // ["I take time out for others."],
        // ["I feel others' emotions."],
        // ["I make people feel at ease."]

    ],
    [
        ["I am always prepared.", "CSN", 1],
        // ["I leave my belongings around."],
        // ["I pay attention to details."],
        // ["I make a mess of things."],
        // ["I get chores done right away."],
        // ["I often forget to put things back in their proper place."],
        // ["I like order."],
        // ["I shirk my duties."],
        // ["I follow a schedule."],
        // ["I am exacting in my work."],

    ],
    [
        ["I have a rich vocabulary.", "OPN", 1],
        // ["I have difficulty understanding abstract ideas."],
        // ["I have a vivid imagination."],
        // ["I am not interested in abstract ideas."],
        // ["I have excellent ideas."],
        // ["I do not have a good imagination."],
        // ["I am quick to understand things."],
        // ["I use difficult words."],
        // ["I spend time reflecting on things."],
        // ["I am full of ideas."],

    ]
]

export default function PaginationControlled() {
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const userScores ={
        "EXT":0,
        "EST":0,
        "AGR":0,
        "CSN":0,
        "OPN":0,

    }
    const onChange = (page,index, value, e) => {
        console.log(questions[page][index][1]);
        console.log(questions[page][index][2]);
        console.log(value);
        userScores[questions[page][index][1]] += value - questions[page][index][2];
        questions[page][index][2] = value;
        console.log(userScores);
    }
    
    return (
        <div className={classes.root}>
            <div className="quesBlock">
                <div className="container" style={{ width: "100%", margin: "auto", marginBottom: "20px" }}>
                    {
                        questions[page-1].map((val, i) => {
                            return (
                                <div key={i}>
                                    <div className="col-12"><h2>Question {i + 1} .   {val[0]}</h2></div><br />
                                    <div className="col-7">
                                        <input type="radio" name={"option" + i} id={i + "_0"} value="1" checked onChange={(e) => onChange(page-1,i, 1, e)} />
                                        <label htmlFor={i + "_0"}>DISAGREE</label>
                                        <div className="check"></div>
                                    </div>
                                    <br />
                                    <br />
                                    <div className="col-7">
                                        <input type="radio" name={"option" + i} id={i + "_1"} value="3"  onChange={(e) => onChange(page-1,i, 3, e)} />
                                        <label htmlFor={i + "_1"}>NEUTRAL</label>
                                        <div className="check"></div>
                                    </div>
                                    <br />
                                    <br />

                                    <div className="col-7">
                                        <input type="radio" name={"option" + i} id={i + "_2"} value="5"  onChange={(e) => onChange(page-1,i, 5, e)} />
                                        <label htmlFor={i + "_2"}>AGREE</label>
                                        <div className="check"></div>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Typography>Page: {page}</Typography>

            <Pagination count={5} page={page} onChange={handleChange} />
        </div>
    );
}


// const Personality = props => {
//     return (
//         <div>

//         </div>
//     )
// }

// // Personality.propTypes = {

// // }

// export default Personality
