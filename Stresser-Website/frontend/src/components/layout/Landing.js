import React, { Fragment } from 'react'
import { Link, Redirect } from "react-router-dom";

const Landing = () => {
    return (
        <Fragment>
            <div className="landingBox">
                <div className="landingHeading">"Its so incredible to finally be understood."</div><br />
                <div className="landingText">
                    Take our Stress Test and get the level of your stress<br />and find out the solutions
		        </div><br />
                
                <Link className="testButton" to="/question">
                    Take the Test<img src={"/static/frontend/img/right-arrow.png"} />

                </Link>
                
                <svg className="unevenShape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 319">
                    <path fill="#fff" fillOpacity="1" d="M0,256L48,229.3C96,203,192,149,288,144C384,139,480,181,576,213.3C672,245,768,267,864,256C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <img className="landingImage" src={"/static/frontend/img/landing-image.png"} />

            </div>

            <div className="aboutSection">
                <div className="sectionHeading">What else you can do here?</div>
                <div style={{width: "70%", margin: "auto"}}>
                    <div className="sectionBlock row">
                        <div className="col-6 imageCol">
                            <img src={"/static/frontend/img/und-others.png"} />

                        </div>

                        <div className="col-6 textCol">
                            <div className="contentHeading">Understand Others</div>
                            <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed aliquet lectus velit, vel ultricies nulla pretium vel. Nullapellentesque risus eget facilisis eleifend. Aenean blanditdiam at sollicitudin rutrum. Cras sed mattis sapien.Praesent lacinia suscipit elit, in condimentum ligulavenenatis ac. Sed quis cursus odio.
					        </div>
                            <button style={{backgroundColor: "rgba(227,55,56,1)"}}>Read About Types</button>
                        </div>
                    </div>
                
                    <div className="sectionBlock row">
                        <div className="col-6 textCol">
                            <div className="contentHeading">Get a Roadmap of Success</div>
                            <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed aliquet lectus velit, vel ultricies nulla pretium vel. Nullapellentesque risus eget facilisis eleifend. Aenean blanditdiam at sollicitudin rutrum. Cras sed mattis sapien.Praesent lacinia suscipit elit, in condimentum ligulavenenatis ac. Sed quis cursus odio.
					        </div>
                            <button style={{backgroundColor: "rgba(245,131,32,1)"}}>Get Your Premium Profile</button>
                        </div>

                        <div className="col-6 imageCol">
                            <img src={"/static/frontend/img/roadmap.png" }/>

                        </div>
                    </div>

                    <div className="sectionBlock row">
                        <div className="col-6 imageCol">
                            <img src={"/static/frontend/img/join-com.png"} />

                        </div>

                        <div className="col-6 textCol">
                            <div className="contentHeading">Join Our Community</div>
                            <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed aliquet lectus velit, vel ultricies nulla pretium vel. Nullapellentesque risus eget facilisis eleifend. Aenean blanditdiam at sollicitudin rutrum. Cras sed mattis sapien.Praesent lacinia suscipit elit, in condimentum ligulavenenatis ac. Sed quis cursus odio.
					</div>
                            <button style={{backgroundColor: "rgba(253,184,19,1)"}}>Enter Discussion</button>
                        </div>
                    </div>
                </div>
                <svg className="unevenShape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 319">
                    <filter id="dropshadow" x="-20" y="-20" width="200" height="200">
                        <feGaussianBlur stdDeviation="10" />
                    </filter>
                    <path className="blur" fill="#2d2d2d" fillOpacity=".3" d="M0,256L48,224C96,192,192,128,288,122.7C384,117,480,171,576,176C672,181,768,139,864,133.3C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    <path fill="#fff" fillOpacity="1" d="M0,256L48,224C96,192,192,128,288,122.7C384,117,480,171,576,176C672,181,768,139,864,133.3C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <img className="footerImage" src={"/static/frontend/img/footer-image.png"} />

            </div>


            <div className="testimonialSection">
                <div className="sectionHeading">Testimonial</div>
                <div className="testimonialText">
                    Curious how accurate we are about you?<br /><span style={{color: "rgba(0,185,255,1)"}}>Take the Test</span> and find out.
		</div>
                <div className="testimonialsBlock row" style={{width: "80%",margin: "60px auto"}}>
                    <div className="col-4">
                        <div className="testimonialInlineBlock" style={{borderTop: "15px solid rgba(227,55,56,1)"}}>
                            <img src={"/static/frontend/img/quotes.png"} className="quotes" />
                            <div className="testimonialContent">
                                Lorem ipsum dolor sit amet,consectetur adipiscing elit.Nunc dapibus lacus sit ametelit euismod aliquet at at ligula.
					</div>
                            <div className="testimonialImageBox">
                                <img src={"/static/frontend/img/testi-1.png"} />

                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="testimonialInlineBlock" style={{borderTop: "15px solid rgba(245,131,32,1)"}}>
                            <img src={"/static/frontend/img/quotes.png"} className="quotes" />
                            <div className="testimonialContent">
                                Lorem ipsum dolor sit amet,consectetur adipiscing elit.Nunc dapibus lacus sit ametelit euismod aliquet at at ligula.
					</div>
                            <div className="testimonialImageBox">
                                <img src={"/static/frontend/img/testi-2.png" }/>

                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="testimonialInlineBlock" style={{borderTop: "15px solid rgba(253,184,19,1)"}}>
                            <img src={"/static/frontend/img/quotes.png"} className="quotes" />
                            <div className="testimonialContent">
                                Lorem ipsum dolor sit amet,consectetur adipiscing elit.Nunc dapibus lacus sit ametelit euismod aliquet at at ligula.
					</div>
                            <div className="testimonialImageBox">
                                <img src={"/static/frontend/img/testi-3.png" }/>

                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </Fragment>
    )
}

export default Landing
