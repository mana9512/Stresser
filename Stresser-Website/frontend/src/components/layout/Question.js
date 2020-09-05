import React, { Fragment } from 'react'
import {Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types'

const Question = () => {
    const quemap = [
        ["I found it hard to wind down.", "s", 0],
        ["I was aware of dryness of my mouth", "a", 0],
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
    }

    const onChange = (index, value, e) => {
        userScores[quemap[index][1]] += value - quemap[index][2];
        quemap[index][2] = value

        console.log(userScores);
    }

    let checkNextDisabled = false;
    let checkPrevDisabled = true;
    let index = 0;

    const handleChange = (currentIndex, e) => {
        console.log(e);
        console.log(currentIndex);
        console.log(index);
        const prevButton = document.getElementsByClassName("carousel-control-prev");
        if (index === 0) {
            index = 0;
        }
        if (index === quemap.length - 1) {
        }
    }

    const nextButton = React.createElement("button", { className: "fas fa-arrow-circle-right arrow"});
    const prevButton = React.createElement("button", { className: "fas fa-arrow-circle-left arrow"});

    return (
        <Fragment>
            <div className="landingBox">
                <div className="landingHeading">Free Stress Test</div><br />
                <div className="landingText">
                    Take our Stress Test and get the level of your stress<br />and find out the solutions
		        </div><br />
                <div className="test-intro row" style={{ width: "80%", margin: "auto" }}>
                    <div className="col-xl-4 col-lg-4 col-md-1 col-sm-1">
                        <div className="test-intro-block" style={{ borderBottom: "15px solid rgba(227,55,56,1)" }}>
                            <img src={"/static/frontend/img/clock.png"} />
                            <h2>Depression</h2>
                            <h4>Take less than 12 minutes</h4>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-1 col-sm-1">
                        <div className="test-intro-block" style={{ borderBottom: "15px solid rgba(245,131,32,1)" }}>
                            <img src={"/static/frontend/img/clock.png/"} />
                            <h2>Anxiety</h2>
                            <h4>Take less than 12 minutes</h4>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-1 col-sm-1">
                        <div className="test-intro-block" style={{ borderBottom: "15px solid rgba(253,184,19,1)" }}>
                            <img src={"/static/frontend/img/clock.png"} />
                            <h2>Stress</h2>
                            <h4>Take less than 12 minutes</h4>
                        </div>
                    </div>
                </div>

                <svg className="unevenShape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 319">
                    <path fill="#fff" fillOpacity="1" d="M0,256L48,229.3C96,203,192,149,288,144C384,139,480,181,576,213.3C672,245,768,267,864,256C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="quesBlock">
                <div className="row" style={{ width: "100%", margin: "auto", marginBottom: "20px"}}>
                    <Carousel interval={null} nextIcon={nextButton} prevIcon={prevButton}>
                        {quemap.map((value, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <div className="col-12"><h2>Question {index + 1} . {value[0]}</h2></div><br />
                                    <div className="col-7">
                                        <input type="radio" name={"option"+ index} id={index+"_0"} onChange={(e) => onChange(index, 0, e)} />
                                        <label htmlFor={index +"_0"}>NEVER</label>
                                        <div className="check"></div>
                                    </div>
                                    <br />
                                    <br />
                                    <div className="col-7">
                                        <input type="radio" name={"option"+ index} id={index +"_1"} onChange={(e) => onChange(index, 1, e)} />
                                        <label htmlFor={index +"_1"}>SOMETIMES</label>
                                        <div className="check"></div>
                                    </div>
                                    <br />
                                    <br />

                                    <div className="col-7">
                                        <input type="radio" name={"option"+ index} id={index +"_2"} onChange={(e) => onChange(index, 2, e)} />
                                        <label htmlFor={index +"_2"}>OFTEN</label>
                                        <div className="check"></div>
                                    </div>
                                    <br />
                                    <br />

                                    <div className="col-7">
                                        <input type="radio" name={"option"+ index} id={index +"_3"} onChange={(e) => onChange(index, 3, e)} />
                                        <label htmlFor={index +"_3"}>ALMOST ALWAYS</label>
                                        <div className="check"></div>
                                    </div>
                                    <br />
                                    <br />
                                </Carousel.Item>
                            )
                            })
                            }
                    </Carousel>
                </div>
            </div>
        </Fragment>
    )
}

// Question.propTypes = {

// }

export default Question
