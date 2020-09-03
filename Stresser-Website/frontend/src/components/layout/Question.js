import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Question = () => {
    const quemap = [
        ["I found it hard to wind down.", "s", undefined],
        // ["I was aware of dryness of my mouth", "a", undefined],
        // ["I couldn’t seem to experience any positive feeling at all", "d", undefined],
        // ["I experienced breathing difficulty (e.g. excessively rapid breathing,breathlessness in the absence of physical exertion)", "a", undefined],
        // ["I found it difficult to work up the initiative to do things", "d", undefined],
        // ["I tended to over-react to situations", "s", undefined],
        // ["I experienced trembling (e.g. in the hands)", "a", undefined],
        // ["I felt that I was using a lot of nervous energy", "s", undefined],
        // ["I was worried about situations in which I might panic and make a fool of myself", "a", undefined],
        // ["I felt that I had nothing to look forward to", "d", undefined],
        // ["I found myself getting agitated", "s", undefined],
        // ["I found it difficult to relax", "s", undefined],
        // ["I felt down-hearted and blue", "d", undefined],
        // ["I was intolerant of anything that kept me from getting on with what I was doing", "s", undefined],
        // ["I felt I was close to panic", "d", undefined],
        // ["I was unable to become enthusiastic about anything", "d", , undefined],
        // ["I felt I wasn’t worth much as a person", "d", undefined],
        // ["I felt that I was rather touchy ", "s", undefined],
        // ["I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat)", "a", undefined],
        // ["I felt scared without any good reason", "a", undefined],
        // ["I felt that life was meaningless", "d", undefined]
    ];
    const userScores = {
        d: 0,
        a: 0,
        s: 0,
    };
    const changeValue = (index, value) => {
        userScores[quemap[index][1]] += value;
        console.log(userScores);
    };

    return (
        <Fragment>
            <div className="landingBox">
                <div className="landingHeading">Free Stree Test</div><br />
                <div className="landingText">
                    Take our Stress Test and get the level of your stress<br />and find out the solutions
		</div><br />
                <div className="test-intro row" style={{ width: "80%", margin: "auto" }}>
                    <div className="col-xl-4 col-lg-4 col-md-1 col-sm-1">
                        <div className="test-intro-block" style={{ borderBottom: "15px solid rgba(227,55,56,1)" }}>
                            <img src={"/static/frontend/img/clock.png"} />
                            <h2>Fast and Easy</h2>
                            <h4>Take less than 12 minutes</h4>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-1 col-sm-1">
                        <div className="test-intro-block" style={{ borderBottom: "15px solid rgba(245,131,32,1)" }}>
                            <img src={"/static/frontend/img/clock.png/"} />
                            <h2>Fast and Easy</h2>
                            <h4>Take less than 12 minutes</h4>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-1 col-sm-1">
                        <div className="test-intro-block" style={{ borderBottom: "15px solid rgba(253,184,19,1)" }}>
                            <img src={"/static/frontend/img/clock.png"} />
                            <h2>Fast and Easy</h2>
                            <h4>Take less than 12 minutes</h4>
                        </div>
                    </div>
                </div>

                <svg className="unevenShape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 319">
                    <path fill="#fff" fillOpacity="1" d="M0,256L48,229.3C96,203,192,149,288,144C384,139,480,181,576,213.3C672,245,768,267,864,256C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="quesBlock">
                <div className="row" style={{ width: "40%", margin: "auto", marginBottom: "20px" }}>
                    <div> {quemap.map((value, index) => {
                        return (
                            <div key={index}>
                                <div className="col-12"><h2>Question {index+1} . {value[0]}</h2></div>
                                <div className="col-4">
                                    <input type="radio" name="option" id="A"  onChange={changeValue(index, 0)}/>
                                    <label htmlFor="A">NEVER</label>
                                    <div className="check"></div>
                                </div>
                                <br/>
                                <div className="col-4">
                                    <input type="radio" name="option" id="B" onChange={changeValue(index, 1)}/>
                                    <label htmlFor="B">SOMETIMES</label>
                                    <div className="check"></div>
                                </div> 
                                <br/>

                                <div className="col-4">
                                    <input type="radio" name="option" id="C" onChange={changeValue(index, 2)}/>
                                    <label htmlFor="C">OFTEN</label>
                                    <div className="check"></div>
                                </div>
                                <br/>

                                <div className="col-4">
                                    <input type="radio" name="option" id="C" onChange={changeValue(index, 3)}/>
                                    <label htmlFor="C">ALMOST ALWAYS</label>
                                    <div className="check"></div>
                                </div>
                                <br/>

                            </div>
                        )
                    })
                    }
                    </div>
                </div>


                <div className="row next-prev" style={{ width: "40%", margin: "auto" }}>
                    <div className="col-6" style={{ textAlign: "left" }}>
                        <button>Previous</button>
                    </div>
                    <div className="col-6" style={{ textAlign: "right" }}>
                        <button>Next</button>
                    </div>
                </div>
            </div>

        </Fragment>

    )
}

// Question.propTypes = {

// }

export default Question
